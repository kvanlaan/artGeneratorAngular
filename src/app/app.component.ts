import { Component, HostListener, Input, Inject, Output, EventEmitter, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { LocationStrategy, PathLocationStrategy } from '../../node_modules/@angular/common';

@Component({
  templateUrl: './login.component.html'
})

export class LoginDialogComponent {
}
@Component({
  templateUrl: './delete.component.html'
})
export class DeleteDialogComponent {
  constructor() {
  }
}
@Component({
  templateUrl: './storage-full.component.html'
})
export class StorageFullDialogComponent {
  constructor() {
  }
}
var ColorScheme;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  aggrObjArea = 0;
  backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  canvas;
  currImageIndex = 0;
  canvasSize = 700;
  colorArr = [];
  colorSchemes = ['Monochromatic', 'Complementary', 'Random'];
  ctx;
  disableRedo = true;
  disableUndo = true;
  edit = false;
  isSafari = false;
  lastImgShape;
  layerCounter = 0;
  randomColor;
  randomStrokeOpacity;
  randomShapeOpacity;
  maxArea = (700 * 700);
  objNum = 23;
  randomScheme;
  randomShape;
  redoList = [];
  redoListShape = [];
  shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  smallShapeArr = ['Rectangle', 'Circle'];
  savedImageArr = [];
  startEditing = false;
  undoList = [];
  undoListShape = [];
  undoListShapeTemp = [];
  redoListShapeTemp = [];
  login = false;
  displayName = '';
  renderDone = true;
  name;
  email;
  user;
  ui;
  dialogRef;
  library = [];
  storageRef;
  imagesRef;
  database;
  authListenerStarted = false;
  loginStarted = false;
  sources = [];
  localStorage: any;
  // colorSchemes = ['Monchromatic', 'Complementary', 'Analogous', 'Triad', 'Tetrad',
  //   'Split Complementary'];
  // shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Trapezoid', 'Line'];
  // shapeArr = ['Trapezoid'];
  @ViewChild('mainContainer') mainContainer;
  @ViewChild('loaderCanvas') loader;
  @ViewChild('myCanvas') styleCanvas;

  constructor(public dialog: MatDialog) {
    this.localStorage = localStorage;
  }
  favoritesArr;
  showFavorites = false;
  filterFavorites() {
    this.favoritesArr = this.savedImageArr.filter(imgObj => {
      if (imgObj.favorite) {
        return imgObj;
      }
    });
    this.showFavorites = !this.showFavorites;
  }


  //     @HostListener('window:resize', ['$event'])
  //   resize(e) {
  //     this.calculateCanvasSize();
  // }
  @HostListener('window:keydown', ['$event'])
  handlekeydown(e) {
    const currIndex = this.currImageIndex;

    if (e.keyCode === 39) {
      if ((currIndex + 1) < this.savedImageArr.length) {
        this.currImageIndex++;
        this.renderImage(this.currImageIndex);
      }
    }
    if (e.keyCode === 40) {
      if (currIndex + 5 < this.savedImageArr.length) {
        this.currImageIndex = currIndex + 5;
        this.renderImage(this.currImageIndex);
      }
    }
    if (e.keyCode === 38) {
      if (currIndex - 5 >= 0) {
        this.currImageIndex = currIndex - 5;
        this.renderImage(this.currImageIndex);
      }
    }
    if (e.keyCode === 37) {
      if (currIndex - 1 >= 0) {
        this.currImageIndex--;
        this.renderImage(this.currImageIndex);
      }
    }
  }
  calculateCanvasSize() {
    this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");

    this.ctx = this.canvas.getContext("2d");

    this.ctx.canvas.width = this.canvas.clientHeight;
    // add checks here for different screen sizes / orientation/ mobile
    // this.ctx.canvas.width = 720;
    this.canvasSize = this.ctx.canvas.width;
    console.log('canvasSize', this.canvasSize);
    this.ctx.canvas.height = this.canvasSize;
  }
  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result', result);
    });
  }
  openDeleteDialog(imgObj, index) {
    if (!document.getElementById('delete')) {

      this.dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: '300px'
      });
      this.dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.delete(imgObj, index);
        }
      });
    }
  }
  openStorageFullDialog() {
    if (!document.getElementById('storage')) {

      this.dialogRef = this.dialog.open(StorageFullDialogComponent, {
        width: '300px'
      });
      this.dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.handleSignedOutUser();
        }
      });
    }
  }
  signOut() {
    location.href = '';

    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
    });
  }

  async handleSignedInUser(user) {
    this.user = user;
    this.login = true;
    this.displayName = this.user.displayName;
    this.email = this.user.email;

    const trimmedName = this.displayName.replace(/\s/g, '');

    await this.database.collection('users/' + trimmedName + '/images').get().then((querySnapshot) => {
      this.savedImageArr = [];
      querySnapshot.forEach((doc) => {
        this.savedImageArr.push(doc.data());
        console.log('saved image', this.savedImageArr);
      });
      if (querySnapshot.docs.length) {
        const displayName = this.displayName.replace(/\s/g, '');
        location.href = '#user/' + displayName;

        this.renderImage(0);
      } else {
        this.getRandomArt(true);
      }
    });

  }

  async handleSignedOutUser() {
    if (!document.getElementById('firebaseui-container')) {
      this.openLoginDialog();
      this.login = false;
      await this.ui.start('#firebaseui-container', this.getUiConfig());
    }
  }

  getUiConfig() {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (this, authResult, redirectUrl) {
          this.login = true;
          if (authResult.user) {
            this.handleSignedInUser(authResult.user);
          }
          // if (authResult.additionalUserInfo) {
          //   document.getElementById('is-new-user').textContent =
          //     authResult.additionalUserInfo.isNewUser ?
          //       'New User' : 'Existing User';
          // }
          // Do not redirect.
          this.dialogRef.close(LoginDialogComponent);
          return false;
        }.bind(this),
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById('firebaseui-auth-container').style.display = 'none';

          document.getElementById('loader').style.display = 'none';
        }
      },
      signInSuccessUrl: 'http://localhost:4200/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    return uiConfig;
  }
  pattern;
  async ngOnInit() {
    // this.localStorage.setItem('currImage', null);
    this.renderDone = false;
    this.pattern = new Image();
    this.pattern.src = '../assets/arabesque-pattern-art.jpg';
    var config = {
      apiKey: "AIzaSyD98GbUHORmW3-C9nxvqboQLapTXxnSMM0",
      authDomain: "artgenerator-8008a.firebaseapp.com",
      databaseURL: "https://artgenerator-8008a.firebaseio.com",
      projectId: "artgenerator-8008a",
      storageBucket: "artgenerator-8008a.appspot.com",
      messagingSenderId: "858892303412"
    };
    firebase.initializeApp(config);

    this.database = firebase.firestore();
    const settings = { timestampsInSnapshots: true };
    this.database.settings(settings);

    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.user = firebase.auth().currentUser;
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.calculateCanvasSize();
    firebase.auth().onAuthStateChanged(async function (this, user) {
      this.renderDone = false;
      this.user = user;
      user ? await this.handleSignedInUser(user) : await this.handleSignedOutUser();

      if (!this.user) {
        // const sources = this.getFromLocal('currImage');
        // if (sources && sources.length > 0) {
        //   let i = 0;
        //   for (const temp of sources) {
        //     this.saveCurrentArt(true, false, temp);
        //   }
        //   this.renderImage(this.currImageIndex);
        // } else {
        this.getRandomArt(true);
        // }
      }
    }.bind(this));
  }

  saveImageFirebase(imageObj) {
    const trimmedName = this.displayName.replace(/\s/g, '');
    this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
      'name': imageObj.name, 'src': imageObj.src, 'favorite': false
    }
    ).then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });
  }

  saveToFavorites(imageObj, index) {
    let val = true;
    if (this.savedImageArr[index].favorite) {
      val = false;
    }

    this.savedImageArr[index].favorite = val;
    const trimmedName = this.displayName.replace(/\s/g, '');
    if(this.user) {
    this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
      'name': imageObj.name, 'src': imageObj.src, 'favorite': val
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    }
  }

  // local storage stuff
  getFromLocal(key: string): any {
    let item = this.localStorage.getItem(key);
    if (item && item !== "undefined") {
      return JSON.parse(this.localStorage.getItem(key));
    }

    return;
  }
  saveToLocal(key: string, value: any) {
    try {
      //  this.localStorage.setItem(key, null);
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      if (e.code === 22) {
        console.log('storage full');
      }
      // this.localStorage.setItem(key, null);
      return false;
    }

  }
  deleteFromLocal(key: string) {
    this.localStorage.removeItem(key);
  }

  getRandomArt(clear, recurseStep?) {
    this.loader.nativeElement.style.visibility = "visible";
    let rand = Math.floor(Math.random() * 3) + 1;
    let recurse = false;
    this.renderDone = false;

    // if (this.edit) {
    //   this.toggleEdit();
    // }
    this.objNum = Math.floor(Math.random() * 23) + 10;
    this.edit = false;
    this.startEditing = false;

    if (recurseStep === undefined) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      if (rand === 1) {
        recurse = true;
      }
    } else {
      recurse = true;
    }
    if (recurse && recurseStep === undefined) {
      recurseStep = Math.floor(Math.random() * 10) + 2;
      var img = new Image();
      img.src = this.canvas.toDataURL();
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
        this.getRandomArtAlg(clear, recurse, recurseStep);
      }.bind(this);
    } else {
      this.getRandomArtAlg(clear, recurse, recurseStep);
    }
  }

  getRandomArtAlg(clear, recurse, recurseStep) {
    this.resetForNewLayer();
    this.randomScheme = this.colorSchemes[Math.floor(Math.random() * this.colorSchemes.length)];
    this.randomScheme = "Random";
    this.colorArr = this.genColors("Random");
    let rand = 1;
    // first layer of small objects;
    this.resetForNewLayer();
    this.getFirstSmallLayer();
    this.resetForNewLayer();

    // second layer of transparent objects
    let norm = true;
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 2) {
      norm = false;
    }
    let trapTrans = 2;
    if (rand === 2) {
      trapTrans = this.randomlyChooseOneOrTwo();
    }

    let layerNum = 20;
    if (rand !== 2 || trapTrans === 1) {
      let layerNum = 20
      if (trapTrans === 1) {
        layerNum = 10;
        this.backgroundShapeArr = ['Rectangle', 'Circle', 'Line'];
      } else {
        this.backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
      }
      while (this.layerCounter < layerNum) {
        this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        this.randomStrokeOpacity = Math.random() * 1;
        this.randomShapeOpacity = Math.random() * 1;
        var randomShape = this.backgroundShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
        var stroke = this.getStroke(this.randomScheme, this.randomColor);
        if (this.randomScheme === 'Complementary') {
          var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
          this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
        } else if (this.randomScheme !== 'Monochromatic') {
          this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
        } else {
          this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
        }
        rand = this.randomlyChooseOneOrTwo();
        if (rand === 1) {
          this.ctx.strokeStyle = 'black';
        }

        if (!this.isSafari) {
          this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
        }
        this.ctx.globalAlpha = (Math.random() * .4);

        this.ctx.fillStyle = this.randomColor;

        if (rand === 1) {
          this.ctx.fillStyle = this.ctx.createPattern(this.pattern, 'repeat');
        }
        this.ctx.lineWidth = Math.random() * 10;
        this.drawShape(randomShape);
        this.layerCounter++;
      }
    }
    this.resetForNewLayer();
    // layer of main shapes
    let objNum = this.objNum;
    this.getMainLayer(objNum, norm, rand, trapTrans);
    // this.resetForNewLayer();
    // this.getLineLayer(15, norm, rand);
    this.resetForNewLayer();
    let lineWidthArr = [];
    while (this.layerCounter <= 25) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomStrokeOpacity = Math.random() * 1;
      this.randomShapeOpacity = Math.random() * .5;
      var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      var stroke = this.getStroke(this.randomScheme, this.randomColor);

      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      rand = this.randomlyChooseOneOrTwo();
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }
      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";

      // if (!this.isSafari) {
      //   this.ctx.globalAlpha = 1;
      //   randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
      //   rand = Math.floor(Math.random() * 2) + 1;
      //   if (rand === 1) {
      //     this.ctx.globalAlpha = randomShapeOpacity;
      //   }
      // } else {
      //   this.ctx.globalAlpha = randomShapeOpacity;
      // }
      this.ctx.fillStyle = this.randomColor;
      let newLineWidth = Math.random() * 10;

      // lineWidthArr.push(newLineWidth);
      // if (!norm) {
      //   if (this.isLineWidthArrMostlyThick(lineWidthArr)) {
      //     newLineWidth = Math.random() * 5;
      //   }
      // }
      this.ctx.lineWidth = newLineWidth;
      this.drawShape(randomShape, true);
      this.layerCounter++;
    }
    this.setUndoRedo(clear);
    this.ctx.globalAlpha = 1;
    if (recurse && recurseStep && recurseStep > 1) {
      recurseStep--;
      this.getRandomArt(clear, recurseStep);
    } else {
      this.saveCurrentArt(clear);
    }
  }
  getFirstSmallLayer() {
    while (this.layerCounter <= 25) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomStrokeOpacity = Math.random();
      this.randomShapeOpacity = Math.random();
      var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      var stroke = this.getStroke(this.randomScheme, this.randomColor);
      if (this.randomScheme === 'Complementary') {
        var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
      } else if (this.randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      }
      let rand = this.randomlyChooseOneOrTwo();
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }
      if (!this.isSafari) {
        this.ctx.globalAlpha = 1;
        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
        rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          this.ctx.globalAlpha = this.randomShapeOpacity;
        }
      } else {
        this.ctx.globalAlpha = this.randomShapeOpacity;
      }
      this.ctx.fillStyle = this.randomColor;
      this.ctx.lineWidth = Math.random() * 10;
      this.drawShape(randomShape, true);
      this.layerCounter++;
    }
  }
  resetForNewLayer() {
    this.layerCounter = 0;
    this.ctx.globalAlpha = 1;
    this.aggrObjArea = 0;
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  }


  getMainLayer(objNum, norm, rand, trapTrans) {
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
    if (norm === false) {
      objNum = Math.floor(Math.random() * 1) + 5;
      // this.shapeArr = ['Trapezoid', 'Circle'];
      // this.shapeArr = ['Trapezoid'];

      // const rand = this.randomlyChooseOneOrTwo();
      // if (rand === 1) {
      this.shapeArr = ['Trapezoid', 'Line'];
      // }
    }
    while (this.layerCounter < objNum) {

      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];

      // randomShapeOpacity = Math.random() * (1) - layerCounter/objNum;
      this.randomShapeOpacity = Math.random();

      if (this.randomShapeOpacity < 0) {
        this.randomShapeOpacity = 0;
      }
      if (this.layerCounter === (objNum - 1)) {
        this.randomShapeOpacity = .1;
      }
      if (this.layerCounter === (objNum - 2) && !norm) {
        this.randomShapeOpacity = .1;
      }
      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // var randomAC = Math.random() * 1;
      var stroke = this.getStroke(this.randomScheme, this.randomColor);

      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';


      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }

      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
      // if (!this.isSafari) {
      //   this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
      // } else {
      //   this.ctx.globalAlpha = this.randomShapeOpacity;
      // }
      this.ctx.fillStyle = this.randomColor;
      // default is middle
      let newLineWidth = Math.random() * 5 + 1;
      if (this.layerCounter < (objNum / 4) || (this.layerCounter > (objNum * .5) && this.layerCounter < (objNum * .6))) {
        newLineWidth = Math.random() * 20 + 16;
      }
      // if(this.layerCounter === objNum/2) {
      //   ne
      // }
      // if(this.layerCounter > (objNum - objNum/3)) {
      //   newLineWidth = Math.random() * 5;
      // }

      // let newLineWidth = Math.random() * 10;
      // lineWidthArr.push(newLineWidth);
      // if (!norm) {
      //   if (this.isLineWidthArrMostlyThick(lineWidthArr)) {
      //     newLineWidth = Math.random() * 5;
      //   }
      // }
      this.ctx.lineWidth = newLineWidth;
      if (!norm) {
        // console.log('trapnTrans', trapTrans);
        // this.ctx.lineWidth = (Math.random() * 10) + 1;
      }
      this.drawShape(randomShape);
      this.layerCounter++;
    }
  }

  isLineWidthArrMostlyThick(lineWidthArr) {
    let widthCounter = 0;
    for (let lineWidth of lineWidthArr) {
      if (lineWidth > 6) {
        widthCounter++;
      }
    }
    (widthCounter / lineWidthArr.length) > .75;
    return true;
  }

  revertChanges() {
    this.undoListShapeTemp = [];
    this.redoListShapeTemp = [];

  }
  drawShape(shape, small?) {
    var xPos = Math.random() * this.canvasSize;
    var yPos = Math.random() * this.canvasSize;
    var height = Math.random() * this.canvasSize;
    var width = Math.random() * this.canvasSize;
    let currObjArea = height * width;
    if (small || (this.aggrObjArea + currObjArea + 250) >= this.maxArea) {
      height = Math.random() * this.canvasSize / 25;
      width = Math.random() * this.canvasSize / 25;
      currObjArea = height * width;
    }

    // if (small) {
    //   var xPos = Math.random() * this.canvasSize / 2;
    //   var yPos = (Math.random() * this.canvasSize) + (this.canvasSize / 2);
    // }

    switch (shape) {
      case 'Rectangle':

        this.ctx.fillRect(xPos, yPos, width, height);
        this.ctx.strokeRect(xPos, yPos, width, height);
        break;



      case 'Trapezoid':
        this.ctx.beginPath();
        let rand1 = Math.random() * this.canvasSize;
        const y1 = Math.random() * this.canvasSize;
        //first point
        this.ctx.moveTo(rand1, y1);

        let rand2 = Math.random() * this.canvasSize;

        //second point completes first side
        let y2 = Math.random() * this.canvasSize;
        this.ctx.lineTo(rand2, y2);
        let rand3 = Math.random() * this.canvasSize;

        let y3 = Math.random() * this.canvasSize;

        // third point completes second side
        this.ctx.lineTo(rand3, y3);
        // fourth point -- cannot cross first line
        //logic here such 
        const heightLow = Math.max(y1, y3);
        const heightHigh = Math.min(y1, y3);

        //
        const leftMost = Math.min(rand1, rand3);
        const rightMost = Math.max(rand1, rand3);
        const addToLeftMost = Math.random() * (rightMost - leftMost);
        let rand4 = leftMost + addToLeftMost;
        let y4 = heightLow - (Math.random() * (heightLow - heightHigh));

        // this.drawShape('Circle', true);
        if (rand1 === leftMost && y1 === heightHigh && rand4 < rand2) {
          y4 = y1 + Math.random() * this.canvasSize;
        }
        this.ctx.lineTo(rand4, y4);
        // this.ctx.lineTo(rand4, y4);
        this.ctx.fill();
        this.ctx.lineTo(rand1, y1);
        this.ctx.stroke();
        currObjArea = this.calcPolygonArea([{ x: rand1, y: y1 }, { x: rand2, y: rand1 }, { x: rand3, y: rand2 }, { x: rand4, y: y2 }]);
        break;
      case 'Triangle':
        this.ctx.beginPath();
        rand1 = xPos;
        rand2 = yPos;
        const ty1 = Math.random() * this.canvasSize;
        const ty2 = Math.random() * this.canvasSize;
        this.ctx.moveTo(rand1, ty1);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand2, ty2);
        this.ctx.stroke();
        this.ctx.lineTo(rand1, ty1);
        this.ctx.fill();
        currObjArea = this.calcPolygonArea([{ x: rand1, y: ty1 }, { x: rand2, y: rand1 }, { x: rand2, y: ty2 }]);
        break;
      case 'Line':
        rand1 = Math.random() * this.canvasSize;
        var rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          rand2 = rand1 + 15;
        } else {
          rand2 = rand1 - 15;
        }
        let ly1 = Math.random() * this.canvasSize;
        let ly2 = Math.random() * this.canvasSize;

        this.ctx.moveTo(rand1, ly1);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand2, ly2);
        this.ctx.stroke();
        // pythagorean theorem
        currObjArea = this.ctx.lineWidth * (this.getDistance(rand1, ly1, rand2, rand1) + this.getDistance(rand2, rand1, rand2, ly2));
        // currObjArea = this.ctx.lineWidth * (rand1 - ly1);
        break;
      case 'Circle':
        var radius = width / 2;
        this.ctx.beginPath();
        this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();

        currObjArea = Math.PI * Math.pow(radius, 2);
        // get better with calculating for circles
        break;
    }
    this.aggrObjArea += currObjArea;
  }

  toggleEdit() {
    this.edit = !this.edit;
    if (this.edit) {
      this.ctx.save();
    } else {
      this.ctx.restore();
    }
    this.startEditing = false;
  }

  delete(imageObj, index?: number) {

    if (index === undefined) {
      index = this.currImageIndex;
    }
    if (index < this.currImageIndex) {
      this.currImageIndex--;
    }
    if (this.user) {
      const trimmedName = this.displayName.replace(/\s/g, '');
      console.log('imageobj name', imageObj.name);
      this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).delete().then(function (docRef) {
        console.log('Successfully deleted');
      })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    }
    // this.sources.splice(index, 1);
    // this.saveToLocal('currImage', this.sources);

    this.savedImageArr.splice(index, 1);
    if (index > this.savedImageArr.length - 1) {
      index--;
      this.renderImage(index);
    }

    if (index === this.currImageIndex || index === 0) {
      this.renderImage(index);
    }
  }

  renderImage(index?: number, startEdit?: boolean) {
    if (this.currImageIndex !== index) {
      this.edit = false;
      this.startEditing = false;
    }
    if (startEdit !== undefined) {
      this.edit = startEdit;
      this.startEditing = startEdit;
    }
    this.currImageIndex = index;

    var img = new Image();

    // this.undoListShape = this.savedImageArr[this.currImageIndex]['undoStackShape'].slice();
    // this.redoListShape = this.savedImageArr[this.currImageIndex]['redoStackShape'].slice();
    // this.undoList = this.savedImageArr[this.currImageIndex]['undoStack'].slice();
    // this.redoList = this.savedImageArr[this.currImageIndex]['redoStack'].slice();
    if (this.savedImageArr[this.currImageIndex]) {
      img.src = this.savedImageArr[this.currImageIndex].src
    } else {
      img.src = this.canvas.toDataURL();

    }// this.sources.push(img.src);
    // }
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);

      this.renderDone = true;
      this.loader.nativeElement.style.visibility = "hidden";
    }.bind(this);
  }

  hack(val) {
    return Array.from(val);
  }
  saveCurrentArt(isNew?: boolean, startEdit?: boolean, source?: string) {
    // const copyOfUndoShape = this.undoListShape.slice();
    // const copyOfRedoShape = this.redoListShape.slice();
    // const copyOfUndo = this.undoList.slice();
    // const copyOfRedo = this.redoList.slice();
    let newIndex = this.currImageIndex;
    // default
    let edit = true;
    if (isNew) {
      edit = false;
    }
    // const imgObj = {
    //   'name': newIndex + 'index',
    //   'src': this.canvas.toDataURL(),
    //   'edit': edit, 'redoStack': copyOfRedo, 'undoStack': copyOfUndo, 'redoStackShape': copyOfRedoShape, 'undoStackShape': copyOfUndoShape
    // };
    let newSource = this.canvas.toDataURL();
    if (source) {
      newSource = source;
    }
    const imgObj = {
      'name': (newIndex + 1) + 'index',
      'src': newSource, 'favorite': false
    };
    const tempSources = this.sources;
    tempSources.push(imgObj.src);
    let res = true;
    // if (!source && !this.user) {
    //   res = this.saveToLocal('currImage', tempSources);
    // } else {
    // add to user libary
    if (this.user) {
      this.saveImageFirebase(this.savedImageArr[this.currImageIndex]);
    }
    // }
    // if (res) {
    if (isNew) {
      this.savedImageArr.push(imgObj);
      newIndex = this.savedImageArr.length - 1;
      this.currImageIndex = newIndex;
    } else {
      this.savedImageArr[newIndex] = imgObj;
    }

    if (startEdit !== undefined) {
      startEdit = startEdit;
    }



    // } else {
    //   this.currImageIndex = this.savedImageArr.length - 1;
    //   this.renderImage(this.currImageIndex);
    //   this.openStorageFullDialog();
    // }
    this.loader.nativeElement.style.visibility = "hidden";
    this.renderDone = true;
  }

  undoShape() {
    /// see what current index is

    if (!this.startEditing && !this.savedImageArr[this.currImageIndex]['edit']) {
      this.savedImageArr[this.currImageIndex]['edit'] = true;
      this.saveCurrentArt(true, true);
    } else {


      if (this.undoListShape.length > 1) {
        var redoState = this.undoListShape.pop();
        this.redoListShape.push(redoState);
        var restoreState = this.undoListShape[this.undoListShape.length - 1];
        var img = new Image();
        img.src = restoreState;
        this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
        img.onload = function () {
          this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
          this.saveCurrentArt();

        }.bind(this);
      }
    }
    this.startEditing = true;
  }
  redoShape() {
    if (!this.startEditing && !this.savedImageArr[this.currImageIndex]['edit']) {
      this.savedImageArr[this.currImageIndex]['edit'] = true;
      this.saveCurrentArt(true);
    }
    this.startEditing = true;

    if (this.redoListShape.length > 1) {
      var restoreState = this.redoListShape.pop();
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
        this.undoListShape.push(this.canvas.toDataURL());
        this.saveCurrentArt(false);

      }.bind(this);
    }
  }
  // end for individual shapes in layer

  // end layer undo redo stuff
  setUndoRedo(clear) {
    if (clear) {
      this.undoList = [];
    }
    this.undoList.push(this.canvas.toDataURL());
    this.redoList = [];
    this.disableCheck();
  }

  undo() {
    if (this.undoList.length > 1) {
      var redoState = this.undoList.pop();
      this.redoList.push(redoState);
      var restoreState = this.undoList[this.undoList.length - 1].slice();
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
        this.disableCheck();
        this.saveCurrentArt(false);
      }.bind(this);
    }

  }
  disableCheck() {
    if (this.redoList.length === 0) {
      this.disableRedo = true;
    } else {
      this.disableRedo = false;
    }
    if (this.undoList.length <= 1) {
      this.disableUndo = true;
    } else {
      this.disableUndo = false;
    }
  }
  redo() {
    if (this.redoList.length) {
      var restoreState = this.redoList.pop();
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
        this.undoList.push(this.canvas.toDataURL());
        this.disableCheck();
        this.saveCurrentArt(false);
      }.bind(this);
    }

  }
  // end layer undo redo stuff
  // end general undo redo stuff

  getDistance(x1, y1, x2, y2) {
    var xs = x2 - x1,
      ys = y2 - y1;
    xs *= xs;
    ys *= ys;
    return Math.sqrt(xs + ys);
  }
  calcPolygonArea(vertices) {
    var total = 0;

    for (var i = 0, l = vertices.length; i < l; i++) {
      var addX = vertices[i].x;
      var addY = vertices[i == vertices.length - 1 ? 0 : i + 1].y;
      var subX = vertices[i == vertices.length - 1 ? 0 : i + 1].x;
      var subY = vertices[i].y;

      total += (addX * addY * 0.5);
      total -= (subX * subY * 0.5);
    }

    return Math.abs(total);
  }

  getStroke(scheme, color): any {
    switch (scheme) {
      case 'Random':
        return this.getRandomRgb();
      case 'Monochromatic':
        return this.getRandomRgb();
      case 'Complementary':
        return this.getComplementary(this.convertFromRgbStringToObj(color));
      case 'Analogous':
        return [];

      case 'Color Triad':
        return [];

      case 'Tetrad':
        return this.getRandomRgb();

      case 'Split Complementary':
        return [];
    }
  }
  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  //BBOOK WUZ HERE
  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
  genColors(scheme) {
    switch (scheme) {
      case 'Random':
        return this.getRandomColorArr();
      case 'Monochromatic':
        return this.getMono();

      case 'Complementary':
        return this.getComplementaryScheme();

      case 'Analogous':
        return [];

      case 'Color Triad':
        return [];

      case 'Tetrad':
        return this.getTetrad();

      case 'Split Complementary':
        return [];
    }
  }

  getRandomColorArr() {
    let counter = 0;
    var colorArr = [];
    while (counter <= this.objNum + 1) {
      var tempRgb = this.getRandomRgb();
      var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
      colorArr.push(tempRgbString);
      counter++;
    }
    return colorArr;
  }

  getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return { 'r': r, 'g': g, 'b': b };
  }

  RGB2HSV(rgb) {
    var hsv;
    hsv = new Object();
    var max = Math.max(rgb.r, rgb.g, rgb.b);
    var dif = max - Math.min(rgb.r, rgb.g, rgb.b);
    hsv.saturation = (max == 0.0) ? 0 : (100 * dif / max);
    if (hsv.saturation == 0) hsv.hue = 0;
    else if (rgb.r == max) hsv.hue = 60.0 * (rgb.g - rgb.b) / dif;
    else if (rgb.g == max) hsv.hue = 120.0 + 60.0 * (rgb.b - rgb.r) / dif;
    else if (rgb.b == max) hsv.hue = 240.0 + 60.0 * (rgb.r - rgb.g) / dif;
    if (hsv.hue < 0.0) hsv.hue += 360.0;
    hsv.value = Math.round(max * 100 / 255);
    hsv.hue = Math.round(hsv.hue);
    hsv.saturation = Math.round(hsv.saturation);
    return hsv;
  }

  // RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
  // which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
  HSV2RGB(hsv) {
    var rgb = { 'r': null, 'g': null, 'b': null }
    if (hsv.saturation == 0) {
      rgb['r'] = Math.round(hsv.value * 2.55);
      rgb['g'] = Math.round(hsv.value * 2.55);
      rgb['b'] = Math.round(hsv.value * 2.55);
    } else {
      hsv.hue /= 60;
      hsv.saturation /= 100;
      hsv.value /= 100;
      var i = Math.floor(hsv.hue);
      var f = hsv.hue - i;
      var p = hsv.value * (1 - hsv.saturation);
      var q = hsv.value * (1 - hsv.saturation * f);
      var t = hsv.value * (1 - hsv.saturation * (1 - f));
      switch (i) {
        case 0: rgb.r = hsv.value; rgb.g = t; rgb.b = p; break;
        case 1: rgb.r = q; rgb.g = hsv.value; rgb.b = p; break;
        case 2: rgb.r = p; rgb.g = hsv.value; rgb.b = t; break;
        case 3: rgb.r = p; rgb.g = q; rgb.b = hsv.value; break;
        case 4: rgb.r = t; rgb.g = p; rgb.b = hsv.value; break;
        default: rgb.r = hsv.value; rgb.g = p; rgb.b = q;
      }
      rgb.r = Math.round(rgb.r * 255);
      rgb.g = Math.round(rgb.g * 255);
      rgb.b = Math.round(rgb.b * 255);
    }
    return rgb;
  }

  //Adding hueShift via Jacob (see comments)
  hueShift(h, s) {
    h += s; while (h >= 360.0) h -= 360.0; while (h < 0.0) h += 360.0; return h;
  }

  // utility stuff
  convertToRgbString(rgbObj) {
    return 'rgb(' + rgbObj.r + ',' + rgbObj.g + ',' + rgbObj.b + ')';
  }
  convertFromRgbStringToObj(rgbString) {
    var rgbStringArr = rgbString.split(',');
    var r = rgbStringArr[0].substring(4);
    r = r.substring(0, r.length - 1);
    var g = rgbStringArr[1]
    g = g.substring(0, g.length - 1);
    var b = rgbStringArr[2];
    b = b.substring(0, b.length - 1);
    return { 'r': r, 'g': g, 'b': b };
  }
  randomlyChooseOneOrTwo() {
    const num = Math.random() + 1;
    if (num < 1.5) {
      return 1;
    } else {
      return 2;
    }
  }

  // min max via Hairgami_Master (see comments)
  min3(a, b, c) {
    return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
  }
  max3(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  }

  download(element) {
    element.href = this.canvas.toDataURL();
    return;
  }

  // end utility

  // not in use - but working code
  getTetrad() {
    var scheme = new ColorScheme;
    scheme.from_hue(21)
      .scheme('tetrad')
      .variation('soft');

    var colors = scheme.colors();
    return colors;
  }


  getComplementaryScheme() {
    var tempRgb = this.getRandomRgb();
    var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
    let counter = 0;
    var currRgb = tempRgb;

    while (counter <= (this.objNum + 200)) {
      // recursion
      currRgb = this.getComplementary(currRgb);
      complementaryColorArr.push(this.convertToRgbString(currRgb));
      counter++;
    }
    return complementaryColorArr;
  }

  getComplementary(rgb) {
    var temphsv = this.RGB2HSV(rgb);
    temphsv.hue = this.hueShift(temphsv.hue, 180.0);
    var finRgb = this.HSV2RGB(temphsv);
    return finRgb;
  }

  getMono() {
    let counter = 0;
    var tempRgb = this.getRandomRgb();
    var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
    var monoColorArr = [];
    while (counter <= (this.objNum + 600)) {
      monoColorArr.push(tempRgbString);
      counter++;
    }
    return monoColorArr;
  }
  //trash- work in progress

  // getAnalogous() {

  // }

  // getTriad() {
  // }
  // /  getSplitComplementary() {
  // getLineShape(objNum, norm, rand) {
  //   this.shapeArr = ['Line'];
  //   while (this.layerCounter < objNum) {

  //     this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
  //     this.randomStrokeOpacity = Math.random();

  //     // randomShapeOpacity = Math.random() * (1) - layerCounter/objNum;
  //     this.randomShapeOpacity = Math.random();

  //     if (this.randomShapeOpacity < 0) {
  //       this.randomShapeOpacity = 0;
  //     }
  //     if (this.layerCounter === (objNum - 1) && !norm) {
  //       this.randomShapeOpacity = .1;
  //     }
  //     if (this.layerCounter === (objNum - 2) && !norm) {
  //       this.randomShapeOpacity = .1;
  //     }
  //     var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
  //     // var randomAC = Math.random() * 1;
  //     var stroke = this.getStroke(this.randomScheme, this.randomColor);
  //     if (this.randomScheme === 'Complementary') {
  //       var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
  //       this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
  //     } else if (this.randomScheme !== 'Monochromatic') {
  //       this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
  //     } else {
  //       this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
  //     }

  //     rand = Math.floor(Math.random() * 2) + 1;
  //     if (rand === 1) {
  //       this.ctx.strokeStyle = 'black';
  //     }

  //     if (!this.isSafari) {
  //       this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
  //     } else {
  //       this.ctx.globalAlpha = this.randomShapeOpacity;
  //     }
  //     this.ctx.fillStyle = this.randomColor;
  //     // default is middle
  //     let newLineWidth = Math.random() * 5;
  //     this.ctx.lineWidth = newLineWidth;
  //     this.drawShape(randomShape);
  //     this.layerCounter++;
  //   }
  // }
  // handleLogOut = function () {
  //   this.ref.unauth();
  // }

  // _logUserIn = function (submittedEmail, submittedPassword) {
  //   var ref = this.ref
  //   var handler = function (error, authData) {
  //     if (error) {
  //       console.log("Login Failed!", error);
  //     } else {
  //       console.log("Authenticated successfully with payload:");
  //       console.log(authData)
  //       location.hash = "dash"
  //     }
  //   }
  //   ref.authWithPassword({
  //     email: submittedEmail,
  //     password: submittedPassword
  //   }, handler);
  // }
  // _signUserUp = function (submittedEmail, submittedPassword) {
  //   var ref = this.ref
  //   var boundSignerUpper = this._signUserUp.bind(this);
  //   var boundLoggerInner = this._logUserIn.bind(this);
  //   var storeUser = function (userData) {
  //     ref.child('users').child(userData.uid).set({ email: submittedEmail })
  //   }
  //   var handler = function (error, userData) {
  //     if (error) {
  //       console.log("Error creating user:", error);
  //       DOM.render(<SplashPage error={ error } signerUpper = { boundSignerUpper } loggerInner = { boundLoggerInner } />, document.querySelector('.container'))
  //     } else {
  //       console.log("Successfully created user account with uid:", userData.uid);
  //       storeUser(userData)
  //       boundLoggerInner(submittedEmail, submittedPassword)
  //     }
  //   }
  //   ref.createUser({
  //     email: submittedEmail,
  //     password: submittedPassword
  //   }, handler);
  // }
}

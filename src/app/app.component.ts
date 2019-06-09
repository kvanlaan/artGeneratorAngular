import { Component, HostListener, ViewChild, ViewChildren } from '@angular/core';
import { Location } from '@angular/common';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { MatDialog, MatSlideToggle } from '@angular/material';
import { LocationStrategy, PathLocationStrategy } from '../../node_modules/@angular/common';
import { GeneratorComponent } from './generator/generator.component';
import { Utilities } from './generator/utilities';
import 'hammerjs';
import * as gcs from '@google-cloud/storage';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }, Utilities]
})

export class AppComponent {
  @ViewChild(GeneratorComponent) generator;
  @ViewChild('loaderCanvas') loader;
  // @ViewChild('fileInput') fileInput;

  @ViewChildren('fileInput') fileInputs
  currImageIndex = 0;
  customImages =
    [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
    { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
    { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
    { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
    { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
    { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
    ];
  database;
  dialogRef;
  displayName = '';
  email = '';
  favoritesArr;
  guid;
  imagesActive: boolean = false;
  imagePopulationDone = true;
  login = false;
  newUser = false;
  suffix = '';
  ready = false;
  renderDone = false;
  shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  showFavorites = false;
  savedImageArr = [];
  user;
  ui;
  patternImageArr;
  darkDatabaseList = [];
  constructor(public http: HttpClient, public utilities: Utilities, public dialog: MatDialog, public location: Location) {
    this.utilities = utilities;
    this.location = location;
  }

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

  async ngOnInit() {

    this.renderDone = false;
    // setting up firebase
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
    // this.getDarkPatterns();

    firebase.auth().onAuthStateChanged(async function (this, user) {
      this.user = user;
      this.user ? await this.handleSignedInUser() : await this.handleSignedOutUser();
    }.bind(this));
  }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
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

  signOut() {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
    });
    if (window.history.length > 1 && this.guid) {
      location.href = '#loggedOut/' + this.guid;
    }
    this.resetImages();
  }

  async handleSignedInUser() {
    this.displayName = this.user.displayName;
    this.email = this.user.email;

    this.login = true;
    this.email = this.user.email;
    if (location.hash.split('/') && location.hash.split('/')[1] && location.hash.split('/')[2]) {
      this.guid = location.hash.split('/')[2];
    }

    let trimmedName = this.email;
    location.href = '#user/' + this.email + '/' + this.guid;

    if (this.newUser) {
      if (this.savedImageArr.length) {
        for (let img of this.savedImageArr)
          this.saveImageFirebase(img);
      }
    } else {
      this.savedImageArr = [];
      if ((!this.newUser) || (this.newUser && this.savedImageArr.length === 0)) {

        var storageRef = firebase.storage().ref();
        if (this.ready && this.renderDone) {
          this.imagePopulationDone = false;
        }
        for (let img in this.customImages) {
          let numerator = (parseInt(img) + 1);
          await storageRef.child(trimmedName + '/customImages/uploadCustom' + numerator).getDownloadURL().then((url) => {
            if (url) {
              this.customImages[parseInt(img)].src = url;
            }
          }).catch(function (error) {
          });

          if (parseInt(img) == (this.customImages.length - 1)) {
            this.setCustomImages();
          }
        }

        await this.database.collection('users/' + trimmedName + '/images').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.savedImageArr.push(doc.data());
          });

          if (querySnapshot.docs.length) {
            this.imagePopulationDone = true;

            this.renderImage(0);
          } else {
            this.imagePopulationDone = true;

            if (this.savedImageArr.length === 0) {
              this.getRandomArt(true);
            }
          }
        });
      }
    }
  }

  async openLoginModal() {
    this.openLoginDialog();
    await this.ui.start('#firebaseui-container', this.getUiConfig());
  }

  async handleSignedOutUser() {
    let guid = '';
    if (location.hash.split('/') && location.hash.split('/')[1]) {
      this.guid = location.hash.split('/')[1];
      guid = this.guid;
      guid = location.hash.split('/')[1];
    }

    if (!document.getElementById('firebaseui-container')) {
      this.login = false;

      if (!this.user) {
        // create a rand guid
        if (location.href.indexOf('loggedOut') < 0) {
          this.guid = this.utilities.getGuid();
          location.href = '#loggedOut/' + this.guid;
        } else {
          if (guid) {
            if (this.ready && this.renderDone) {
              this.imagePopulationDone = false;
            }
            var storageRef = firebase.storage().ref();
            for (let img in this.customImages) {
              let numerator = (parseInt(img) + 1);
              await storageRef.child(guid + '/customImages/uploadCustom' + numerator).getDownloadURL().then((url) => {
                if (url) {
                  this.customImages[parseInt(img)].src = url;
                }
              }).catch(function (error) {
                console.log('error', error);
              });
              if (parseInt(img) == (this.customImages.length - 1)) {
                this.setCustomImages();

              }
            }
            this.savedImageArr = [];
            await this.database.collection('users/' + guid + '/images').get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.savedImageArr.push(doc.data());
              });

              if (querySnapshot.docs.length) {
                this.imagePopulationDone = true;
                this.renderImage(0);
              } else {
                this.imagePopulationDone = true;

                // this.getRandomArt(true);
              }

            });

          }
        }
        await this.openLoginModal();
      }
    }
  }

  getUiConfig() {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (this, authResult, redirectUrl) {
          this.login = true;
          console.log('authResult', authResult);
          this.suffix = '/' + this.guid;
          this.displayName = authResult.additionalUserInfo.profile.name.replace(/\s/g, '');

          if (authResult.additionalUserInfo.isNewUser) {
            this.newUser = true;
          } else {
            this.newUser = false;
          }
          if (authResult.user) {
            this.user = authResult.user;
          }
          this.dialogRef.close(LoginDialogComponent);
          return false;
        }.bind(this),
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        }
      },
      signInSuccessUrl: '' + location.host + '/#user/' + this.displayName + this.suffix,
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    return uiConfig;
  }
  resetImages() {
    this.customImages =
      [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
      { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
      { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
      { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
      { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
      { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
      ];
  }
  customImagesActive = false;
  toggleImages() {
    if(!this.customImagesActive) {
    // this.resetImages();
    this.setCustomImages();
   this.customImagesActive = true;
    } else {
      this.customImagesActive = false;
      this.generator.initiatePatterns();
    }
  }
  uploadCustomImage(fileIndex, event) {
    const fileName = 'uploadCustom' + (fileIndex + 1);

    const replaceObj = this.customImages.find(img => { return img.name === fileName })
    const replaceIndex = this.customImages.indexOf(replaceObj);
    this.customImages[replaceIndex].fileTooBig = false;

    if (event.target.files && event.target.files[0]) {
      this.customImages[replaceIndex].ready = false;
      let file = event.target.files[0]
      const url = window.URL.createObjectURL(file);
      const newImg = new Image();
      newImg.crossOrigin = "Anonymous";
      newImg.src = url;

      const fileUrl = newImg.src;
      let trimmedName = this.guid;
      if (this.user) {
        this.email = this.user.email;
        trimmedName = this.email;
      }
      // checking if file exceeds storage limit of  1048487 bites ~ 1 MB
      var fileSize = file.size / 1024 / 1024;
      if (fileSize > 1) {
        this.fileInputs._results[fileIndex].value = '';

        this.customImages[replaceIndex].ready = true;
        this.customImages[replaceIndex].fileTooBig = true;

        alert('File size exceeds 1 MB');
        setTimeout(() => {
          this.customImages[replaceIndex].fileTooBig = false;
        }, 2000);
        return;

      } else {
        var storageRef = firebase.storage().ref();
        storageRef.child(trimmedName + '/customImages/' + fileName).put(file).then(function (snapshot) {
          console.log('Uploaded a blob or file!', snapshot);
        });
      }

      if (replaceIndex >= 0) {
        this.customImages[replaceIndex].src = fileUrl;
      } else {
        this.customImages.push({ 'name': fileName, 'crossOrigin': "Anonymous", 'src': fileUrl, 'ready': true, 'fileTooBig': false });
      }
      this.setCustomImages();
      this.fileInputs._results[fileIndex].value = '';
    }
  }

  renderImage(index?: number) {
    // if(this.showFavorites) {
      if (index !== undefined) {
        this.currImageIndex = index;
      } 
    this.generator.renderImage(index, this.showFavorites)
    // } else {

    // }
  }
  updateCurrentIndex(index: number) {
    this.currImageIndex = index;
  }
  setRenderDone(bool: boolean) {
    this.renderDone = bool;
    this.ready = bool;
  }
  setCustomImages() {
    this.generator.setCustomImages(true);
     this.customImagesActive = true;
  }

  async getRandomArt(clear, recurseStep?) {
   this.generator.getRandomArt(clear);
  }

  filterFavorites() {
    this.favoritesArr = this.savedImageArr.filter(imgObj => {
      if (imgObj.favorite) {
        return imgObj;
      }
    });
    this.showFavorites = !this.showFavorites;
  }

  delete(imageObj, index?: number) {

    if (index === undefined) {
      index = this.currImageIndex;
    }
    if (index < this.currImageIndex) {
      this.currImageIndex--;
    }
    if (this.user) {
      const trimmedName = this.email;
      this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).delete().then(function (docRef) {
        console.log('Successfully deleted');
      })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    }

    this.savedImageArr.splice(index, 1);
    if (index > this.savedImageArr.length - 1) {
      index--;
      this.renderImage(index);
    }

    if (index === this.currImageIndex || index === 0) {
      this.renderImage(index);
    }
  }

  saveImageFirebase(imageObj) {
    let trimmedName = this.guid;
    if (this.user) {
      this.email = this.user.email;
      trimmedName = this.email;
    }

    if (this.utilities.byteCount(imageObj.src) > 1048487) {
      let tooLong = true;
      let compSize = 1.0;
      while (tooLong && (compSize > 0)) {
        if (this.utilities.byteCount(imageObj.src) > 1048487) {
          const canvasSrc = this.generator.canvas.toDataURL("image/jpeg", compSize);
          if (this.utilities.byteCount(canvasSrc) <= 1048487) {
            imageObj.src = canvasSrc;
            tooLong = false;
          } else {
            imageObj.src = canvasSrc;
            compSize = compSize - .01;
          }
        }
      }
    }

    this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
      'name': imageObj.name, 'src': imageObj.src, 'favorite': false
    }).then(function (docRef) {
      // console.log('Document written with ID: ', docRef.id);
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

    let trimmedName = this.guid;
    if (this.user) {
      trimmedName = this.email;
    }

    this.database.collection('users/' + trimmedName + '/images').doc(imageObj.name).set({
      'name': imageObj.name, 'src': imageObj.src, 'favorite': val
    }).then(function (docRef) {
      // console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });
  }

  download(element) {
    element.href = this.generator.canvas.toDataURL();
    return;
  }
}

import { Component } from '@angular/core';
var tinycolor;
var ColorScheme;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  objNum = 23;
  canvasSize = 700;
  maxArea = (700 * 700);
  colorSchemes = ['Monochromatic', 'Complementary', 'Random'];
  shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  smallShapeArr = ['Rectangle', 'Circle'];
  backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  edit = false;
  canvas;
  ctx;
  aggrObjArea = 0;
  redoList = [];
  undoList = [];
  redoListLayer = [];
  undoListLayer = [];
  disableRedo = true;
  disableUndo = true;
  isSafari = false;
  lastImg = '';
  lastImgLayer;
  colorArr = [];
  layerCounter = 0;
  randomColor;
  randomStrokeOpacity;
  randomShapeOpacity;
  randomScheme;
  randomShape;
  savedImageArr = [];
  startEditing = false;
  borderColor = 'none';
  currImageIndex;
  // colorSchemes = ['Monchromatic', 'Complementary', 'Analogous', 'Triad', 'Tetrad',
  //   'Split Complementary'];
  // shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Trapezoid', 'Line'];
  // shapeArr = ['Trapezoid'];

  ngOnInit() {
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.getRandomArt(true);
  }
  delete(index?: number) {
    if (index === undefined) {
      index = this.currImageIndex;
    }
    this.savedImageArr.splice(index, 1);

    if (index > this.savedImageArr.length - 1) {
      index--;
    }
    this.renderImage(index);
  }
  zoomIn() {
    this.ctx.scale(2, 2);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderImage();
  }
  zoomOut() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.scale(.5, .5);
    this.renderImage();
  }
  getRandomArt(clear) {
    if (this.edit) {
      this.toggleEdit();
    }
    // this.saveCurrentArt();
    this.objNum = Math.floor(Math.random() * 23) + 10;
    if (clear) {
      // if (this.lastImg && this.lastImg !== this.canvas.toDataURL() && this.savedImageArr.indexOf(this.canvas.toDataURL()) < 0) {
      //   this.saveCurrentArt();
      // }
      this.undoListLayer = [];
      this.redoListLayer = [];
      this.edit = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

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
        // var randomAC = Math.random() * 1;
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
        this.ctx.lineWidth = Math.random() * 10;
        this.drawShape(randomShape);
        this.layerCounter++;
        this.saveCurrentArtLayer();
      }
    }
    this.resetForNewLayer();
    // layer of main shapes
    let objNum = this.objNum;
    this.getMainLayer(objNum, norm, rand);
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
      this.saveCurrentArtLayer();
    }
    this.setUndoRedo(clear);
    this.ctx.globalAlpha = 1;
    this.saveCurrentArt(false, true);
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
      this.saveCurrentArtLayer();
    }
  }
  resetForNewLayer() {
    this.layerCounter = 0;
    this.ctx.globalAlpha = 1;
    this.aggrObjArea = 0;
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  }


  getMainLayer(objNum, norm, rand) {
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
    if (norm === false) {
      objNum = Math.floor(Math.random() * 1) + 5;
      // this.shapeArr = ['Trapezoid', 'Circle'];
      this.shapeArr = ['Trapezoid'];

      const rand = this.randomlyChooseOneOrTwo();
      if (rand === 1) {
        this.shapeArr = ['Trapezoid', 'Line'];
      }
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
      this.drawShape(randomShape);
      this.layerCounter++;
      this.saveCurrentArtLayer();
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
      this.savedImageArr[this.currImageIndex]['src'] = this.canvas.toDataURL();
      this.savedImageArr[this.currImageIndex]['undoStack'] = this.undoListLayer;
      this.savedImageArr[this.currImageIndex]['redoStack'] = this.redoListLayer;
      this.savedImageArr[this.currImageIndex]['edit'] = true;
      this.ctx.restore();
    }
    this.startEditing = false;
  }
  renderImage(index?: number) {
    this.currImageIndex = index;
    this.undoListLayer = this.savedImageArr[this.currImageIndex]['undoStack'];
    console.log('this.undoListLayer', this.undoListLayer);
    this.redoListLayer = this.savedImageArr[this.currImageIndex]['redoStack'];

    var img = new Image();
    // if (index === undefined) {
    //   img.src = this.lastImg;
    // } else {
    img.src = this.savedImageArr[this.currImageIndex].src;
    // }
    this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
    }.bind(this);
  }

  saveCurrentArt(edit?: boolean, isNew?: boolean) {
    const imgObj = { 'src': this.canvas.toDataURL(), 'edit': edit, 'redoStack': this.redoListLayer, 'undoStack': this.undoListLayer };
    if (isNew) {
      this.savedImageArr.push(imgObj);
      this.currImageIndex = this.savedImageArr.length - 1;
    } else {
      this.savedImageArr[this.currImageIndex]['src'] = this.canvas.toDataURL();
      this.savedImageArr[this.currImageIndex]['undoStack'] = this.undoListLayer;
      this.savedImageArr[this.currImageIndex]['redoStack'] = this.redoListLayer;
      this.savedImageArr[this.currImageIndex]['edit'] = edit;
    }
    this.renderImage(this.currImageIndex);
  }

  // end undo redo stuff
  // for the shapes in an individual layer
  renderLastLayer() {
    var img = new Image();
    img.src = this.lastImgLayer;
    this.saveCurrentArtLayer();
    this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
    }.bind(this);
  }
  saveCurrentArtLayer() {
    this.lastImgLayer = this.canvas.toDataURL();
    this.setUndoRedoLayer();
  }

  setUndoRedoLayer() {
    this.undoListLayer.push(this.canvas.toDataURL());
    this.redoListLayer = [];
  }
  undoLayer() {
    /// see what current index is
    if (!this.startEditing && !this.savedImageArr[this.currImageIndex]['edit']) {
      this.saveCurrentArt(true, true);
      this.startEditing = true;
    }
    if (this.undoListLayer.length > 1) {
      var redoState = this.undoListLayer.pop();
      this.redoListLayer.push(redoState)
      var restoreState = this.undoListLayer[this.undoListLayer.length - 1];
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
      }.bind(this);
    }
  }
  redoLayer() {
    if (!this.startEditing && !this.savedImageArr[this.currImageIndex]['edit']) {
      this.saveCurrentArt(true, true);
      this.startEditing = true;
    }
    if (this.redoListLayer.length > 1) {
      var restoreState = this.redoListLayer.pop();
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
        this.undoListLayer.push(this.canvas.toDataURL());
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
    if (this.edit) {
      this.toggleEdit();
    }
    if (this.undoList.length > 1) {
      var redoState = this.undoList.pop();
      this.redoList.push(redoState)
      var restoreState = this.undoList[this.undoList.length - 1];
      var img = new Image();
      img.src = restoreState;
      this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
      img.onload = function () {
        this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
      }.bind(this);
    }
    this.disableCheck();
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
      }.bind(this);
    }
    this.disableCheck();
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
    let recursionStep = 0;
    var colorArr = [];
    while (recursionStep <= this.objNum + 1) {
      var tempRgb = this.getRandomRgb();
      var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
      colorArr.push(tempRgbString);
      recursionStep++;
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
    let recursionStep = 0;
    var currRgb = tempRgb;

    while (recursionStep <= (this.objNum + 200)) {
      // recursion
      currRgb = this.getComplementary(currRgb);
      complementaryColorArr.push(this.convertToRgbString(currRgb));
      recursionStep++;
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
    let recursionStep = 0;
    var tempRgb = this.getRandomRgb();
    var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
    var monoColorArr = [];
    while (recursionStep <= (this.objNum + 600)) {
      monoColorArr.push(tempRgbString);
      recursionStep++;
    }
    return monoColorArr;
  }
  //trash- work in progress

  // getAnalogous() {

  // }

  // getTriad() {
  // }
  // /  getSplitComplementary() {
  // getLineLayer(objNum, norm, rand) {
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

}

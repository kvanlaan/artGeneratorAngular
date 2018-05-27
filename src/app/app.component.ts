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
  // colorSchemes = ['Monchromatic', 'Complementary', 'Analogous', 'Triad', 'Tetrad',
  //   'Split Complementary'];
  colorSchemes = ['Monochromatic', 'Complementary', 'Random'];
  shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];

  // shapeArr = ['Triangle', 'Circle', 'Trapezoid', 'Line'];
  canvas;
  ctx;
  recursionStep = 0;
  aggrObjArea = 0;
  redoList = [];
  undoList = [];
  disableRedo = true;
  disableUndo = true;
  isSafari = false;
  lastImg;
  ngOnInit() {
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.getRandomArt(true);
  }
  renderLast() {
    var img = new Image();
    img.src = this.lastImg;
    this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
    }.bind(this);

  }
  saveCurrentArt() {
    this.lastImg = this.canvas.toDataURL();
    console.log('save save');
  }
  getRandomArt(clear) {
    this.aggrObjArea = 0;
    this.objNum = Math.floor(Math.random() * 23) + 10;
    if (clear) {
      this.saveCurrentArt();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    let randomScheme = this.colorSchemes[Math.floor(Math.random() * this.colorSchemes.length)];
    randomScheme = "Random";
    let layerCounter = 0;
    var colorArr = this.genColors("Random");
    let randomColor;
    let randomStrokeOpacity;
    let randomShapeOpacity;
    let rand;
    while (layerCounter <= 10) {
      randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
      randomStrokeOpacity = Math.random() * 1;
      randomShapeOpacity = Math.random() * 1;
      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      var stroke = this.getStroke(randomScheme, randomColor);
      if (randomScheme === 'Complementary') {
        var complStroke = colorArr[Math.floor(Math.random() * colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + randomStrokeOpacity + ")";
      } else if (randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      }
      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }
      if (!this.isSafari) {
        this.ctx.globalAlpha = 1;
        randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
        rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          this.ctx.globalAlpha = randomShapeOpacity;
        }
      } else {
        this.ctx.globalAlpha = randomShapeOpacity;
      }
      this.ctx.fillStyle = randomColor;
      this.ctx.lineWidth = Math.random() * 10;
      this.drawShape(randomShape, true);
      layerCounter++;
    }
    layerCounter = 0;
    // while (num < (Math.floor(this.objNum * (2/3)))) {
    this.aggrObjArea = 0;
    while (layerCounter < this.objNum) {
      randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
      randomStrokeOpacity = Math.random() * 1;
      randomShapeOpacity = Math.random() * .4;
      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // var randomAC = Math.random() * 1;
      var stroke = this.getStroke(randomScheme, randomColor);
      if (randomScheme === 'Complementary') {

        var complStroke = colorArr[Math.floor(Math.random() * colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + randomStrokeOpacity + ")";
      } else if (randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';

      }
      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }

      if (!this.isSafari) {
        this.ctx.globalAlpha = 1;
        randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
        // var rand = Math.floor(Math.random() * 2) + 1;
        // if (rand === 1) {
        this.ctx.globalAlpha = randomShapeOpacity;
        // }
      } else {
        this.ctx.globalAlpha = randomShapeOpacity;
      }
      this.ctx.fillStyle = randomColor;
      this.ctx.lineWidth = Math.random() * 10;
      this.drawShape(randomShape);
      layerCounter++;
    }

    layerCounter = 0;
    this.ctx.globalAlpha = 1;

    // while (num <  Math.floor(this.objNum * (2/3))) {

    while (layerCounter < this.objNum) {
      randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
      randomStrokeOpacity = Math.random() * 1;
      randomShapeOpacity = Math.random() * 1;
      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // var randomAC = Math.random() * 1;
      var stroke = this.getStroke(randomScheme, randomColor);
      if (randomScheme === 'Complementary') {

        var complStroke = colorArr[Math.floor(Math.random() * colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + randomStrokeOpacity + ")";
      } else if (randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';

      }
      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }

      if (!this.isSafari) {
        randomColor = randomColor.substring(0, randomColor.length - 1) + ',' + randomShapeOpacity + ")";
      } else {
        this.ctx.globalAlpha = randomShapeOpacity;
      }
      this.ctx.fillStyle = randomColor;
      this.ctx.lineWidth = Math.random() * 10;
      this.drawShape(randomShape);
      layerCounter++;
    }
    this.setUndoRedo(clear);
    this.ctx.globalAlpha = 1;
  }
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

  drawShape(shape, small?) {
    var xPos = Math.random() * this.canvasSize;
    var yPos = Math.random() * this.canvasSize;
    var height = Math.random() * this.canvasSize;
    var width = Math.random() * this.canvasSize;
    let currObjArea = height * width;
    if (small || (this.aggrObjArea + currObjArea + 200) >= this.maxArea) {
      height = Math.random() * this.canvasSize / 25;
      width = Math.random() * this.canvasSize / 25;
      currObjArea = height * width;
    }

    if (small) {
      var xPos = Math.random() * this.canvasSize / 2;
      var yPos = (Math.random() * this.canvasSize) + (this.canvasSize / 2);
    }


    switch (shape) {
      case 'Rectangle':
      this.ctx.fillRect(xPos, yPos, width, height);
      this.ctx.strokeRect(xPos, yPos, width, height);
      break;

      case 'Trapezoid':
        this.ctx.beginPath();
        let rand1 = xPos
        let rand2 = yPos
        let rand3 = height
        let rand4 = width

        this.ctx.moveTo(rand1, Math.random() * this.canvasSize);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand3, rand2);
        this.ctx.lineTo(rand4, Math.random() * this.canvasSize);
        this.ctx.fill();
        this.ctx.stroke();
        break;
      case 'Triangle':
        this.ctx.beginPath();
        rand1 = xPos;
        rand2 = yPos;
        this.ctx.moveTo(rand1, Math.random() * this.canvasSize);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand2, Math.random() * this.canvasSize);
        this.ctx.fill();
        this.ctx.stroke();
        if(!small) {
        currObjArea = currObjArea/2;
        }
        break;
      case 'Line':
        rand1 = Math.random() * this.canvasSize;
        var rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          rand2 = rand1 + 15;
        } else {
          rand2 = rand1 - 15;
        }
        this.ctx.moveTo(rand1, Math.random() * this.canvasSize);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand2, Math.random() * this.canvasSize);
        this.ctx.stroke();
        // if(!small) {
        // currObjArea = height;
        // }
      case 'Circle':
        var radius = width / 2;
        this.ctx.beginPath();
        this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();
        break;
    }
    this.aggrObjArea += currObjArea;
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
        return this.getRandom();
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

  getMono() {
    this.recursionStep = 0;
    var tempRgb = this.getRandomRgb();
    var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
    var monoColorArr = [];
    while (this.recursionStep <= (this.objNum + 600)) {
      monoColorArr.push(tempRgbString);
      this.recursionStep++;
    }
    return monoColorArr;
  }

  getRandom() {
    this.recursionStep = 0;
    var colorArr = [];
    while (this.recursionStep <= this.objNum + 1) {
      var tempRgb = this.getRandomRgb();
      var tempRgbString = 'rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')';
      colorArr.push(tempRgbString);
      this.recursionStep++;
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

  getComplementaryScheme() {
    var tempRgb = this.getRandomRgb();
    var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
    this.recursionStep = 0;
    var currRgb = tempRgb;

    while (this.recursionStep <= (this.objNum + 200)) {
      // recursion
      currRgb = this.getComplementary(currRgb);
      complementaryColorArr.push(this.convertToRgbString(currRgb));
      this.recursionStep++;
    }
    return complementaryColorArr;
  }

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
  getComplementary(rgb) {
    var temphsv = this.RGB2HSV(rgb);
    temphsv.hue = this.hueShift(temphsv.hue, 180.0);
    var finRgb = this.HSV2RGB(temphsv);
    return finRgb;
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

  //min max via Hairgami_Master (see comments)
  min3(a, b, c) {
    return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
  }
  max3(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  }
  getAnalogous() {

  }

  getTriad() {
  }
  getTetrad() {
    var scheme = new ColorScheme;
    scheme.from_hue(21)
      .scheme('tetrad')
      .variation('soft');

    var colors = scheme.colors();
    return colors;

  }
  getSplitComplementary() {
  }

  download(element) {
    element.href = this.canvas.toDataURL();
    return;
  }
}

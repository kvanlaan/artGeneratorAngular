import { Component, OnInit, ViewChild, Output, EventEmitter, Input, ViewChildren } from '@angular/core';
import { Utilities } from './utilities';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
  providers: [Utilities]

})
export class GeneratorComponent implements OnInit {
  @ViewChild('loaderCanvas') loader;
  @Output()
  saveImageFirebase = new EventEmitter<any>();
  @Output()
  renderDoneEmit = new EventEmitter<boolean>();

  @Input() savedImageArr = [];
  @Input() favoritesArr = [];

  @Input() customImages;
  @Input() customImagesActive: boolean = false;
  @Output() updateCurrentIndex = new EventEmitter();
  aggrObjArea = 0;
  backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  canvas;
  canvasSize = 700;
  canvasTwo;
  canvasSizeTwo = 700;
  colorArr = [];
  ctx;
  ctxTwo;
  @Input() currImageIndex = 0;
  genTypeArr = ["noPattern", "transPattern", "random"];
  genType;
  layerCounter = 0;
  objNum = 23;
  patternFill = false;
  patternSwitch;
  randomScheme;
  randomShape;
  randomColor;
  randomStrokeOpacity;
  randomShapeOpacity;
  shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  smallShapeArr = ['Rectangle', 'Circle'];
  patternOffset;
  pattern;
  patternOne;
  patternTwo;
  patternThree;
  patternFour;
  patternFive;
  patternSix;
  patternBedroom;
  patternBuddhist;
  renderDone = false;
  singleLayer;
  isTrunks;
  isFrieze;
  isFriezeTwo;
  isArabesque;
  isBedroom = false;
  isMexico;
  patternDatabaseList = []
  darkDatabaseList = []

  beginPath = false;
  // feature detection
  isSafari = false;
  startingRecurseStep = 0;
  customImagesLoaded = [];
  initialImages =
  [{ 'name': 'uploadCustom1', 'crossOrigin': "Anonymous", 'src': 'assets/arabesque_pattern.jpg', 'ready': true, 'fileTooBig': false },
  { 'name': 'uploadCustom2', 'crossOrigin': "Anonymous", 'src': 'assets/kosovo_map.jpg', 'ready': true, 'fileTooBig': false },
  { 'name': 'uploadCustom3', 'crossOrigin': "Anonymous", 'src': 'assets/frieze.jpg', 'ready': true, 'fileTooBig': false },
  { 'name': 'uploadCustom4', 'crossOrigin': "Anonymous", 'src': 'assets/mexico_flag.jpg', 'ready': true, 'fileTooBig': false },
  { 'name': 'uploadCustom5', 'crossOrigin': "Anonymous", 'src': 'assets/van.jpg', 'ready': true, 'fileTooBig': false },
  { 'name': 'uploadCustom6', 'crossOrigin': "Anonymous", 'src': 'assets/trunks.png', 'ready': true, 'fileTooBig': false }
  ];
  constructor(public http: HttpClient, public utilities: Utilities) {
    this.utilities = utilities;
  }

  ngOnInit() {
    // this.ready = false;
    this.renderDone = false;
    this.initiatePatterns();
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.calculateCanvasSize();
    this.getDarkPatterns();
  }
artImagesSubscription;
  getDarkPatterns() {
    var storageRef = firebase.storage().ref();

    if (this.darkDatabaseList.length === 0 || this.patternDatabaseList.length === 0) {
      return new Promise(resolve => {
        if(!this.artImagesSubscription) {}
        console.log('url',window.location.href );
        console.log('window', window);

        console.log('window.location.href ', window.location.href );
        this.artImagesSubscription = this.http.get(window.location.origin  + '/artImages').subscribe(function (this, res: any) {
          res.forEach(function (this, item) {
            if (item["metadata"]["name"].indexOf('dark') > -1) {
              storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (this, url) {
                const darkImage = new Image();
                darkImage.crossOrigin = "Anonymous";

                darkImage.src = url;
                this.darkDatabaseList.push(darkImage)
              }.bind(this));
            } else {
              storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (this, url) {
                const darkImage = new Image();
                darkImage.crossOrigin = "Anonymous";

                darkImage.src = url;
                this.patternDatabaseList.push(darkImage)
              }.bind(this));
            }
          }.bind(this));
          resolve();

        }.bind(this))

      });
    }
    return;
  }

  initiatePatterns() {
    this.patternOne = new Image();
    this.patternOne.crossOrigin = "Anonymous";

    this.patternTwo = new Image();
    this.patternTwo.crossOrigin = "Anonymous";

    this.patternThree = new Image();
    this.patternThree.crossOrigin = "Anonymous";

    this.patternFour = new Image();
    this.patternFour.crossOrigin = "Anonymous";

    this.patternBuddhist = new Image();
    this.patternBuddhist.crossOrigin = "Anonymous";

    this.patternBedroom = new Image();
    this.patternBedroom.crossOrigin = "Anonymous";

    this.patternFive = new Image();
    this.patternFive.crossOrigin = "Anonymous";

    this.patternSix = new Image();
    this.patternSix.crossOrigin = "Anonymous";

    this.patternBedroom.src = 'assets/haystacks.jpg';

    this.patternOne.src = this.initialImages[0].src
    this.patternOne.crossOrigin = "Anonymous";
    this.patternOne.onload = function () {
      const pattern = this.ctx.createPattern(this.patternOne, 'repeat');
      this.ctx.fillStyle = pattern;
      // this.customImages[0].ready = true;
      // this.customImagesLoaded.push(this.patternOne);

      this.patternTwo.src = this.initialImages[1].src;
      this.patternTwo.onload = function () {
        const pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
        this.ctx.fillStyle = pattern;
        // this.customImages[1].ready = true;
        // this.customImagesLoaded.push(this.patternTwo);
        this.patternThree.src = this.initialImages[2].src;
        this.patternThree.onload = function () {
          const pattern = this.ctx.createPattern(this.patternThree, 'repeat');
          this.ctx.fillStyle = pattern;
          // this.customImages[2].ready = true;
          // this.customImagesLoaded.push(this.patternThree);

          this.patternFour.src = this.initialImages[3].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(this.patternFour, 'repeat');
            this.ctx.fillStyle = pattern;
            // this.customImages[3].ready = true;
            // this.customImagesLoaded.push(this.patternFour);
            this.patternFive.src = this.initialImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(this.patternFive, 'repeat');
              this.ctx.fillStyle = pattern;
              // this.customImages[4].ready = true;
              // this.customImagesLoaded.push(this.patternFive);
              this.patternSix.src = this.initialImages[5].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(this.patternSix, 'repeat');
                this.ctx.fillStyle = pattern;
                // this.customImages[5].ready = true;
                // this.customImagesLoaded.push(this.patternSix);
                await this.getRandomArt(true);
              }.bind(this);
            }.bind(this);
          }.bind(this);
        }.bind(this);

      }.bind(this);
    }.bind(this);
  }

  calculateCanvasSize() {
    this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvasSize = this.canvas.clientHeight;
    this.ctx.canvas.width = this.canvasSize;
    this.ctx.canvas.height = this.canvasSize;

    this.canvasTwo = <HTMLCanvasElement>document.getElementById("myCanvasTwo");
    this.ctxTwo = this.canvasTwo.getContext("2d");
    this.canvasSizeTwo = this.canvasTwo.clientHeight;
    this.ctxTwo.canvas.width = this.canvasSizeTwo;
    this.ctxTwo.canvas.height = this.canvasSizeTwo;
  }
  offset_x = 0;
  offset_y = 0;

  async getRandomArt(clear, recurseStep?) {
    // hide favorites because we're about to switch to savedimagearr
    // hiding stuff since a new image is being drawn]

    this.loader.nativeElement.style.visibility = "visible";
    this.singleLayer = false;

    //these values are related to what the art will look like 
    let recurse = false;
    this.objNum = Math.floor(Math.random() * 23) + 10;
    this.patternFill = this.utilities.randomlyChooseTrueOrFalse();

    this.isTrunks = false;
    this.isArabesque = false;
    this.isMexico = false;
    this.isFrieze = false;
    this.isBedroom = false;
    this.isFriezeTwo = false;
    if(this.customImagesActive) {
    this.patternOne = this.customImagesLoaded[0];
    this.patternTwo = this.customImagesLoaded[1];
    this.patternThree = this.customImagesLoaded[2];
    this.patternFour = this.customImagesLoaded[3];
    this.patternFive = this.customImagesLoaded[4];
    this.patternSix = this.customImagesLoaded[5];
    }
    if (recurseStep === undefined) {
      this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();

      // if no recurse, this means this is a new piece, not just a layer, so clear and calculate recurse chance
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      recurse = this.utilities.randomlyChooseTrueOrFalse();
      if (!recurse) {
        this.singleLayer = true;
        if (this.genType === 'noPattern' || (this.genType === 'transPattern' && this.singleLayer)) {
          this.isTrunks = this.utilities.randomlyChooseTrueOrFalseThird();
          if (!this.isTrunks) {
            if (this.utilities.randomlyChooseTrueOrFalseThird) {
              this.isArabesque = false;
              this.isFrieze = true;
              this.isFriezeTwo = false;
              this.isMexico = false;
              if (this.utilities.randomlyChooseTrueOrFalseThird) {
                this.isFriezeTwo = true;
                this.isFrieze = false;
              }

            } else {
              this.isFrieze = false;
              this.isFriezeTwo = false;
              this.isArabesque = true;
              this.isMexico = false;
              if (this.utilities.randomlyChooseTrueOrFalseThird) {
                this.isFriezeTwo = true;
                this.isArabesque = false;
              }
            }
          } else {
            this.isArabesque = false;
            this.isFrieze = false;
            this.isFriezeTwo = false;
            this.isMexico = false;
          }
          this.isArabesque = false;
          this.isFrieze = false;
          this.isFriezeTwo = false;
          this.isMexico = false;
          this.isTrunks = false;
          const solidSwitch = Math.floor(Math.random() * 7) + 1;
          if (solidSwitch === 1) {
            this.isArabesque = true;
          } else if (solidSwitch === 2) {
            this.isArabesque = true;
          } else if (solidSwitch === 3) {
            this.isTrunks = false;
          } else if (solidSwitch === 4) {
            this.isFrieze = true;
          } else if (solidSwitch === 5) {
            this.isFrieze = true;
          } else if (solidSwitch === 6) {
            this.isFriezeTwo = true;
          }
          else {
            this.isMexico = true;
          }
        }
        this.beginPath = false;
        const maxDarkIndex = this.darkDatabaseList.length - 1;

        var one = Math.floor(Math.random() * maxDarkIndex);
        var two = Math.floor(Math.random() * maxDarkIndex);
        var three = Math.floor(Math.random() * maxDarkIndex);
        var four = Math.floor(Math.random() * maxDarkIndex);

        var five = Math.floor(Math.random() * maxDarkIndex);
        if (!this.customImagesActive && this.darkDatabaseList.length >= 6) {
          const darkOne = this.darkDatabaseList[one];
          this.patternSix = darkOne;
          const darkThree = this.darkDatabaseList[three];
          this.patternThree = darkThree;
          const darkFour = this.darkDatabaseList[four];
          this.patternFour = darkFour;
          const darkFive = this.darkDatabaseList[five];
          this.getRandomArtAlg(clear, recurse, recurseStep);


        } else {
          this.getRandomArtAlg(clear, recurse, recurseStep);
        }
      }
    } else {
      // if recurseStep is defined then we know
      recurse = true;
    }

    if (recurse) {
      if (!this.customImagesActive && !this.utilities.randomlyChooseTrueOrFalseThirdReal()) {
        const maxDarkIndex = this.patternDatabaseList.length - 1;

        var one = Math.floor(Math.random() * maxDarkIndex);
        var two = Math.floor(Math.random() * maxDarkIndex);
        var three = Math.floor(Math.random() * maxDarkIndex);
        var four = Math.floor(Math.random() * maxDarkIndex);

        var five = Math.floor(Math.random() * maxDarkIndex);
        if (this.patternDatabaseList.length >= 6) {
          const darkOne = this.patternDatabaseList[one];
          this.patternSix = darkOne;
          const darkThree = this.patternDatabaseList[three];
          this.patternThree = darkThree;
          const darkFour = this.patternDatabaseList[four];
          this.patternFour = darkFour;
          const darkFive = this.patternDatabaseList[five];
          this.patternFive = darkFive;
        }
      }
      if (this.genType === 'noPattern' || (this.genType === 'transPattern' && this.singleLayer)) {
        this.isTrunks = this.utilities.randomlyChooseTrueOrFalseThird();
        if (!this.isTrunks) {
          if (this.utilities.randomlyChooseTrueOrFalseThird) {
            this.isArabesque = false;
            this.isFrieze = true;
            this.isFriezeTwo = false;
            this.isMexico = false;
            if (this.utilities.randomlyChooseTrueOrFalseThird) {
              this.isFriezeTwo = true;
              this.isFrieze = false;
            }

          } else {
            this.isFrieze = false;
            this.isFriezeTwo = false;
            this.isArabesque = true;
            this.isMexico = false;
            if (this.utilities.randomlyChooseTrueOrFalseThird) {
              this.isFriezeTwo = true;
              this.isArabesque = false;
            }
          }
        } else {
          this.isArabesque = false;
          this.isFrieze = false;
          this.isFriezeTwo = false;
          this.isMexico = false;
        }
        this.isArabesque = false;
        this.isFrieze = false;
        this.isFriezeTwo = false;
        this.isMexico = false;
        this.isTrunks = false;
        const solidSwitch = Math.floor(Math.random() * 7) + 1;
        if (solidSwitch === 1) {
          this.isArabesque = true;
        } else if (solidSwitch === 2) {
          this.isArabesque = true;
        } else if (solidSwitch === 3) {
          this.isTrunks = false;
        } else if (solidSwitch === 4) {
          this.isFrieze = true;
        } else if (solidSwitch === 5) {
          this.isFrieze = true;
        } else if (solidSwitch === 6) {
          this.isFriezeTwo = true;
        }
        else {
          this.isMexico = true;
        }
      }
      // because it's fast - we only care about making the load if it's new AND layers
      if (recurse && recurseStep === undefined) {

        recurseStep = Math.floor(Math.random() * 9) + 4;
        this.startingRecurseStep = recurseStep;
        if (recurseStep > 18) {
          this.largeRecurseStep = true;
        } else {
          this.largeRecurseStep = false;
        }
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
    // }
  }

  largeRecurseStep = false;
  forceBeginPath = false;
  getRandomArtAlg(clear, recurse, recurseStep) {
    this.patternFillSingleBegun = false;

    this.beginPath = this.utilities.randomlyChooseTrueOrFalse();
    this.randomScheme = "Random";
    this.colorArr = this.getRandomColorArr();
    let rand = 1;
    this.patternOffset = 0;

    // first layer of small objects;
    this.resetForNewLayer();
    this.getFirstSmallLayer();
    this.resetForNewLayer();

    // layer of transparent objects
    let norm = true;
    rand = Math.floor(Math.random() * 3) + 1;
    if (rand === 2) {
      norm = false;
    }
    norm = true;

    let trapTrans = 2;
    if (rand === 2) {
      trapTrans = this.utilities.randomlyChooseOneOrTwo();
    }
    // trapTrans = 2;
    let layerNum = 20;
    if (norm || trapTrans === 1) {
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
        var stroke = this.getRandomRgb();
        if (this.randomScheme === 'Complementary') {
          var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
          this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
        } else if (this.randomScheme !== 'Monochromatic') {
          this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
        } else {
          this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
        }
        rand = this.utilities.randomlyChooseOneOrTwo();
        if (rand === 1) {
          this.ctx.strokeStyle = 'black';
        }

        // if (!this.isSafari) {
        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
        // }
        //this.ctx.globalAlpha = (Math.random() * .4);
       
        this.ctx.globalAlpha = .4 - (layerNum/this.layerCounter * .01);
        this.ctx.fillStyle = this.randomColor;

        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
        this.ctx.lineWidth = Math.random() * 10;

        if(this.singleLayer) {
          this.ctx.lineWidth =  Math.random() * 5.2;
        //   console.log('TRAP');
        // console.log('norm', norm);
        // console.log('traptrans', trapTrans);
        // console.log('shape opacity', this.randomShapeOpacity);
        // console.log('random shape ocaicty', this.randomStrokeOpacity);
        }
        this.drawShape(randomShape);
        this.layerCounter++;
      }
    }
    this.resetForNewLayer();
    // layer of main shapes
    let objNum = this.objNum;
    if (this.genType === 'transPattern') {
      objNum = Math.floor(Math.random() * 23) + 19;
    }
    this.getMainLayer(objNum, norm, rand, trapTrans);

    this.resetForNewLayer();

    // second small layer
    this.getSecondSmallLayer(norm);
    this.resetForNewLayer();

    // if(!this.beginPath) {
    // this.beginPath = true;
    // this.getSecondSmallLayer(norm);
    // this.resetForNewLayer();

    // }

    // if (this.singleLayer && ((this.genType === "noPattern" || this.genType === "random"))) {
    //   this.forceBeginPath = true;
    //   this.getSecondSmallLayer(true);
    //   this.resetForNewLayer();
    //   this.forceBeginPath = false;
    // }
    if (this.singleLayer) {
       this.forceBeginPath = true;
      this.getSecondSmallLayer(true);
      this.resetForNewLayer();
      this.forceBeginPath = false;
    }
    this.ctx.globalAlpha = 1;
    if (recurse && recurseStep && recurseStep > 1) {
      recurseStep--;
      this.getRandomArt(clear, recurseStep);
    } else {
      this.saveCurrentArt(clear);
    }
  }
  getSecondSmallLayer(norm) {
    let count = 25;
    // norm = true;
    if (norm) {
      count = 45;
    }
    if(this.singleLayer) {
      count = 75;
    }
    while (this.layerCounter <= count) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomStrokeOpacity = Math.random() * 1;
      this.randomShapeOpacity = Math.random() * .5;
      const randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      const stroke = this.getRandomRgb();

      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      const blackStroke = this.utilities.randomlyChooseTrueOrFalse();
      if (blackStroke) {
         this.ctx.strokeStyle = 'black';
      }
      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";

      // Safari feature detection
      // if (!this.isSafari) {
      // this.ctx.globalAlpha = 1;
      // this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
      // const rand = Math.floor(Math.random() * 2) + 1;
      // if (rand === 1) {
      // this.ctx.globalAlpha = this.randomShapeOpacity;
      // }
      // } else {
      // this.ctx.globalAlpha = this.randomShapeOpacity;
      // }
      this.ctx.fillStyle = this.randomColor;
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      this.ctx.lineWidth = Math.random() * 10;

      if(this.singleLayer) {
        this.ctx.lineWidth =  Math.random() * 5.2;

        // console.log('shape opacity', this.randomShapeOpacity);
        // console.log('random shape ocaicty', this.randomStrokeOpacity);
        // console.log('linewidth', this.ctx.lineWidth);
        // console.log('strokestyle', this.ctx.strokeStyle);
        // console.log('DONE');
        }
      this.drawShape(randomShape, true);
      this.layerCounter++;
    }
  }
  getFirstSmallLayer() {
    let smallCounter = 25;
    if(this.singleLayer) {
      smallCounter = 100
    }
    while (this.layerCounter <= smallCounter) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomStrokeOpacity = Math.random();
      this.randomShapeOpacity = Math.random();
      var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      var stroke = this.getRandomRgb();
      if (this.randomScheme === 'Complementary') {
        var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
      } else if (this.randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      }
      let rand = this.utilities.randomlyChooseOneOrTwo();
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
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      this.ctx.lineWidth = Math.random() * 10;
      this.drawShape(randomShape, true);
      this.layerCounter++;
      // this.ctx.globalAlpha = .1;

      if(this.singleLayer) {
        this.ctx.lineWidth =  Math.random() * 5.2;

        console.log('FIRST SINGLE LAYER')
        console.log('shape opacity', this.randomShapeOpacity);
        console.log('random shape ocaicty', this.randomStrokeOpacity);
        console.log('linewidth', this.ctx.lineWidth);
        console.log('strokestyle', this.ctx.strokeStyle);
        }
    }
  }
  resetForNewLayer() {
    this.layerCounter = 0;
    this.ctx.globalAlpha = 1;
    this.aggrObjArea = 0;
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  }

  getMainLayer(objNum, norm, rand, trapTrans) {
    this.shapeArr = ['Rectangle', 'Triangle', 'Line'];

    if (this.genType !== 'random') {
      this.patternFill = false;
    } else {
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      if (this.patternFill === false) {
        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      }
    }

    norm = false;
    if (!norm) {
      objNum = Math.floor(Math.random() * 1) + 5;
      this.shapeArr = ['Trapezoid', 'Line'];

      if (this.singleLayer) {
        this.beginPath = false;
        this.isTrunks = this.utilities.randomlyChooseTrueOrFalse();
        if (this.isTrunks) {
          this.isArabesque = false;
          this.isFrieze = false;
          this.isFriezeTwo = false;
          this.patternFill = true;
          this.isMexico = this.utilities.randomlyChooseTrueOrFalse();
          if (this.isMexico) {
            this.isTrunks = false;
          }
        } else {
          this.patternFill = false;
        }

      }
    }
    while (this.layerCounter < objNum) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomShapeOpacity = Math.random();
      if (this.randomShapeOpacity < 0) {
        this.randomShapeOpacity = 0;
      }
      if (this.layerCounter === (objNum - 1) || this.layerCounter === (objNum)) {
        this.randomShapeOpacity = 0;
        this.patternFill = false;
      }
      if (this.layerCounter === (objNum - 2)) {
        this.randomShapeOpacity = .1;
      }

      if(this.singleLayer) {
      this.ctx.globalAlpha = this.layerCounter/objNum + .1;
      } else {
        this.ctx.globalAlpha = 1;
      }

      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // if (this.singleLayer && randomShape !== 'Line') {
      //   var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // }
      var stroke = this.getRandomRgb();

      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';


      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      }

      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";

      this.ctx.fillStyle = this.randomColor;
      // default is middle
      let newLineWidth = Math.random() * 5 + 1;
      if (this.layerCounter < (objNum / 4) || (this.layerCounter > (objNum * .5) && this.layerCounter < (objNum * .6))) {
        newLineWidth = Math.random() * 20 + 16;
      }

      this.ctx.lineWidth = newLineWidth;

      if(this.singleLayer) {
        this.patternFill = true;
        this.ctx.lineWidth =  Math.random() * 5.2;
      console.log('norm', norm);
      console.log('traptrans', trapTrans);
      console.log('shape opacity', this.randomShapeOpacity);
      console.log('random shape ocaicty', this.randomStrokeOpacity);
      console.log('linewidth', this.ctx.lineWidth);
      console.log('strokestyle', this.ctx.strokeStyle);
      }
      this.drawShape(randomShape, false, true);
      this.layerCounter++;
    }
  }
  patternFillSingleBegun = false;
  transform = false;
  drawShape(shape, small?, main?) {
    var offset_x = 0;
    var offset_y = 0;
    var xPos = Math.random() * this.canvasSize;
    var yPos = Math.random() * this.canvasSize;
    var height = Math.random() * this.canvasSize;
    var width = Math.random() * this.canvasSize;
    let currObjArea = height * width;

    this.patternSwitch = Math.floor(Math.random() * 8) + 1;
    rand = this.utilities.randomlyChooseOneOrTwo();
    if (this.genType === "noPattern" && main) {
      this.patternFill = true;
    }
    // if (this.largeRecurseStep) {
    //   this.patternFill = false;
    // }
    if(!this.singleLayer && main && !this.utilities.randomlyChooseTrueOrFalse()) {
      this.transform = true;

      //  this.ctx.save();
      if(this.utilities.randomlyChooseTrueOrFalse) {

    // this.ctx.setTransform(1, .6, .2, 1, 0, 0);
      } else {
        // this.ctx.setTransform(1, .2, .6, 1, 0, 0);

      }
    } else {
      this.transform = false;
    }
    if (this.patternFill) {

      if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
        this.patternFillSingleBegun = true;
      } else {
        offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
        offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
        this.ctx.translate(offset_x, offset_y);
      }
      if (this.patternSwitch === 1) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
      } else if (this.patternSwitch === 2) {
        if (rand === 1) {
          this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, 'repeat');
        } else if (rand === 2) {
          this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
        }
      } else if (this.patternSwitch === 3) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');

      } else if (this.patternSwitch === 4) {
        if (rand === 1) {

          this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');

        } else if (rand === 2) {
          this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');
        }
      } else if (this.patternSwitch === 5) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, 'repeat');
      } else if (this.patternSwitch === 6) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, 'repeat');
      } else if (this.patternSwitch === 7) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, 'repeat');
      } else {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
      }
      if (this.isFrieze && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, 'repeat');
      }
      if (this.isFriezeTwo && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, 'repeat');
      }
      if (this.isTrunks && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, 'repeat');

      }
      if (this.isArabesque && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, 'repeat');
      }

      if (this.isMexico && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, 'no-repeat');
      }

      if (this.isBedroom && main) {
        this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, 'repeat');
      }
    }

    rand = Math.floor(Math.random() * 100) + 1;

    if (small || (this.aggrObjArea + currObjArea + 250) >= (Math.pow(this.canvasSize, 2))) {
      height = Math.random() * this.canvasSize / 25;
      width = Math.random() * this.canvasSize / 25;
      currObjArea = height * width;
    }

    switch (shape) {
      case 'Rectangle':
        this.ctx.fillRect(xPos, yPos, width, height);
        this.ctx.strokeRect(xPos, yPos, width, height);
        break;
      case 'Trapezoid':
        // omitting begin path triggers the wireframe look
        if (!this.forceBeginPath && this.singleLayer) {
        } else {
          this.ctx.beginPath();
        }

        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
          if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
            if (!this.utilities.randomlyChooseTrueOrFalseThird()) {


              // this.ctx.lineWidth = 2;
            }
          }
        }

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

        const leftMost = Math.min(rand1, rand3);
        const rightMost = Math.max(rand1, rand3);
        const addToLeftMost = Math.random() * (rightMost - leftMost);
        let rand4 = leftMost + addToLeftMost;
        let y4 = heightLow - (Math.random() * (heightLow - heightHigh));

        if (rand1 === leftMost && y1 === heightHigh && rand4 < rand2) {
          y4 = y1 + Math.random() * this.canvasSize;
        }
        this.ctx.lineTo(rand4, y4);
        this.ctx.fill();
        this.ctx.lineTo(rand1, y1);
        this.ctx.stroke();
        currObjArea = this.calcPolygonArea([{ x: rand1, y: y1 }, { x: rand2, y: rand1 }, { x: rand3, y: rand2 }, { x: rand4, y: y2 }]);

        break;
      case 'Triangle':

        if (!this.forceBeginPath && this.singleLayer) {
        } else {
          this.ctx.beginPath();
        }

        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
          if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
            if (!this.utilities.randomlyChooseTrueOrFalseThird()) {


              // this.ctx.lineWidth = 2;
            }
          }
        }
        rand1 = xPos;
        rand2 = yPos;
        const ty1 = Math.random() * this.canvasSize;
        const ty2 = Math.random() * this.canvasSize;

        // vertex one
        this.ctx.moveTo(rand1, ty1);

       // vertex two
        this.ctx.lineTo(rand2, rand1);
        // this.ctx.stroke();
       
        // vertex three
        this.ctx.lineTo(rand2, ty2);
        this.ctx.stroke();

        this.ctx.lineTo(rand1, ty1);


        // const set y diff

      //  const yDiff = 50;
      //  this.ctx.lineTo(rand1, ty1-yDiff);
      //  this.ctx.stroke();

      //  this.ctx.lineTo(rand2, rand1-yDiff);
      //  this.ctx.stroke();

      //  this.ctx.lineTo(rand2, rand1);
      //  this.ctx.moveTo(rand2, rand1-yDiff);

      //  this.ctx.stroke();

      //  this.ctx.lineTo(rand2, ty2-yDiff);
      //  this.ctx.stroke();

      //  this.ctx.lineTo(rand2, ty2);
      //  this.ctx.moveTo(rand2, ty2-yDiff);
      //  this.ctx.stroke();

      //  this.ctx.lineTo(rand1, ty1-yDiff);

      //  this.ctx.stroke();

        this.ctx.fill();
        currObjArea = this.calcPolygonArea([{ x: rand1, y: ty1 }, { x: rand2, y: rand1 }, { x: rand2, y: ty2 }]);
        break;
      case 'Line':
        // this.ctx.beginPath();
        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
          if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
            if (!this.utilities.randomlyChooseTrueOrFalseThird()) {

              // this.ctx.setLineDash([5, 15]);
              // this.ctx.lineWidth = 2;
            }
          }
        }
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
        break;
      case 'Circle':
        var radius = width / 2;
        if (!this.forceBeginPath && (this.singleLayer)) {
        } else {
          this.ctx.beginPath();
        }

        this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();

        currObjArea = Math.PI * Math.pow(radius, 2);
        // get better with calculating for circles
        break;
    }
    if (this.patternFill) {
      if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {

      } else {
        this.ctx.translate(-offset_x, -offset_y);
      }
    }
    this.aggrObjArea += currObjArea;
    // if(this.transform) {

      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
// this.ctx.restore();    // }
  }

  renderImage(index?: number, favorites?: boolean) {
    if (index !== undefined) {
      this.currImageIndex = index;
    }

    var img = new Image();
    let imageArr = this.savedImageArr;
    if (favorites) {
      imageArr = this.favoritesArr;
    }
    if (imageArr[this.currImageIndex]) {
      img.src = imageArr[this.currImageIndex].src;
    } else {
      img.src = this.canvas.toDataURL();
    }

    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
      this.drawImageScaled(img, this.ctxTwo)
      this.renderDone = true;
      this.renderDoneEmit.emit(true);
      this.loader.nativeElement.style.visibility = "hidden";
      if (index === undefined) {
        this.updateCurrentIndex.emit(this.savedImageArr.length - 1);
      }
    }.bind(this);
  }
  drawImageScaled(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;

    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  saveCurrentArt(isNew?: boolean, source?: string) {
    let newSource = this.canvas.toDataURL();
    if (source) {
      newSource = source;
    }
    const imgObj = {
      'name': this.savedImageArr.length + 'index',
      'src': newSource, 'favorite': false
    };

    let res = true;
    isNew = true;
    if (isNew) {
      this.savedImageArr.push(imgObj);
    } else {
      this.savedImageArr[this.currImageIndex] = imgObj;
    }

    this.currImageIndex = this.savedImageArr.length - 1;
    this.saveImageFirebase.emit(imgObj);

    this.loader.nativeElement.style.visibility = "hidden";
    this.renderDone = true;
    this.renderDoneEmit.emit(true);
    this.renderImage();
  }

  setCustomImages(clear) {
    this.patternOne.src = this.customImages[0].src
    this.patternOne.crossOrigin = "Anonymous";
    this.patternOne.onload = function () {
      const pattern = this.ctx.createPattern(this.patternOne, 'repeat');
      this.ctx.fillStyle = pattern;
      this.customImages[0].ready = true;
      this.customImagesLoaded.push(this.patternOne);

      this.patternTwo.src = this.customImages[1].src;
      this.patternTwo.onload = function () {
        const pattern = this.ctx.createPattern(this.patternTwo, 'repeat');
        this.ctx.fillStyle = pattern;
        this.customImages[1].ready = true;
        this.customImagesLoaded.push(this.patternTwo);
        this.patternThree.src = this.customImages[2].src;
        this.patternThree.onload = function () {
          const pattern = this.ctx.createPattern(this.patternThree, 'repeat');
          this.ctx.fillStyle = pattern;
          this.customImages[2].ready = true;
          this.customImagesLoaded.push(this.patternThree);

          this.patternFour.src = this.customImages[3].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(this.patternFour, 'repeat');
            this.ctx.fillStyle = pattern;
            this.customImages[3].ready = true;
            this.customImagesLoaded.push(this.patternFour);
            this.patternFive.src = this.customImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(this.patternFive, 'repeat');
              this.ctx.fillStyle = pattern;
              this.customImages[4].ready = true;
              this.customImagesLoaded.push(this.patternFive);
              this.patternSix.src = this.customImages[5].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(this.patternSix, 'repeat');
                this.ctx.fillStyle = pattern;
                this.customImages[5].ready = true;
                this.customImagesLoaded.push(this.patternSix);
                await this.getRandomArt(clear)
              }.bind(this);
            }.bind(this);
          }.bind(this);
        }.bind(this);

      }.bind(this);
    }.bind(this);
  }

  // helpers
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

  //BBOOK WUZ HERE
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
}

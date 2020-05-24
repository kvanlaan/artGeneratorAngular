import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Utilities } from './utilities';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import FastAverageColor from 'fast-average-color';

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
  transDatabaseList = []
  recurse;
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
  artImagesSubscription;
  restoreScale;
  offset_x: number = 0;
  offset_y: number = 0;
  fullCanvasSize: number = 0;
  forceTrapezoidBeginPath: boolean;
  lowestPoint: number = 0;
  rightmostPoint: number = 0;
  dark;
  normalColor;
  genStarted = false;

  constructor(public http: HttpClient, public utilities: Utilities) {
    this.utilities = utilities;
  }

  async ngOnInit() {
    this.initiatePatterns();
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.calculateCanvasSize();
    this.getLibrary();
  }
  getLibrary() {
    var storageRef = firebase.storage().ref();
    if (this.darkDatabaseList.length === 0 || this.patternDatabaseList.length === 0) {
      return new Promise(resolve => {
        if (!this.artImagesSubscription) { }
        this.artImagesSubscription = this.http.get(window.location.origin + '/artImages').subscribe(async function (this, res: any) {
          res.forEach(function (this, item) {
            if (item["metadata"]["name"].indexOf('dark') > -1) {
              storageRef.child(item["metadata"]["name"]).getDownloadURL().then(async function (this, url) {
                const darkImage = new Image();
                darkImage.crossOrigin = "Anonymous";

                darkImage.src = url;
                this.darkDatabaseList.push(darkImage)
                if(!this.genStarted) {
                  if(this.darkDatabaseList.length === 6) {
                    this.genStarted = true;
                    await this.getRandomArt(true, undefined, true);
                  }
                }

              }.bind(this));
            } else if (item["metadata"]["name"].indexOf('trans') > -1) {
              storageRef.child(item["metadata"]["name"]).getDownloadURL().then(function (this, url) {
                const transImage = new Image();
                transImage.crossOrigin = "Anonymous";

                transImage.src = url;
                this.transDatabaseList.push(transImage)
                // this.patternDatabaseList.push(darkImage)

              }.bind(this));
            } 
            else {
              storageRef.child(item["metadata"]["name"]).getDownloadURL().then(async function (this, url) {
                const darkImage = new Image();
                darkImage.crossOrigin = "Anonymous";

                darkImage.src = url;
                this.patternDatabaseList.push(darkImage)
                if(!this.genStarted) {
                  if(this.patternDatabaseList.length === 6) {
                    this.genStarted = true;
                    await this.getRandomArt(true, undefined, false);
                  }
                }

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

    this.patternOne.src = this.initialImages[4].src
    this.patternOne.crossOrigin = "Anonymous";
    this.patternOne.onload = function () {
      const pattern = this.ctx.createPattern(this.patternOne, this.repeat);
      this.ctx.fillStyle = pattern;

      this.patternTwo.src = this.initialImages[4].src;
      this.patternTwo.onload = function () {
        const pattern = this.ctx.createPattern(this.patternTwo, this.repeat);
        this.ctx.fillStyle = pattern;
        this.patternThree.src = this.initialImages[4].src;
        this.patternThree.onload = function () {
          const pattern = this.ctx.createPattern(this.patternThree, this.repeat);
          this.ctx.fillStyle = pattern;

          this.patternFour.src = this.initialImages[4].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(this.patternFour, this.repeat);
            this.ctx.fillStyle = pattern;

            this.patternFive.src = this.initialImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(this.patternFive, this.repeat);
              this.ctx.fillStyle = pattern;
              this.patternSix.src = this.initialImages[4].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(this.patternSix, this.repeat);
                this.ctx.fillStyle = pattern;
              }.bind(this);
            }.bind(this);
          }.bind(this);
        }.bind(this);

      }.bind(this);
    }.bind(this);
  }
  calculateCanvasSize() {
    // let dpi = window.devicePixelRatio;
    this.canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    // this.canvas.height = this.canvas.clientHeight;
    // this.canvas.width = this.canvas.clientWidth;
    console.log('CANVAS HEIGHT', this.canvas.height);
    this.ctx = this.canvas.getContext("2d");
    this.canvasSize = this.canvas.clientHeight;
    this.ctx.canvas.width = this.canvasSize;
    this.ctx.canvas.height = this.canvasSize;

    this.canvasTwo = <HTMLCanvasElement>document.getElementById("myCanvasTwo");
    this.canvasTwo.height = this.canvasTwo.clientHeight
    this.canvasTwo.width = this.canvasTwo.clientHeight

    this.ctxTwo = this.canvasTwo.getContext("2d");
    this.canvasSizeTwo = this.canvasTwo.clientHeight;
    
    this.ctxTwo.canvas.width = this.canvasSizeTwo;
    this.ctxTwo.canvas.height = this.canvasSizeTwo;
    
    this.ctx.scale(.5175, .5175)

    this.ctxTwo.scale(.5175, .5175)
    this.restoreScale = 1.932367149758454;
    this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;

    this.leftmostPoint = this.fullCanvasSize
  }

  isMobile() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
      return check;
  }
  async getRandomArt(clear, recurseStep?, dark?) {
    this.colorArr = await this.getRandomColorArr();
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

    if (this.customImagesActive) {
      this.patternOne = this.customImagesLoaded[0];
      this.patternTwo = this.customImagesLoaded[1];
      this.patternThree = this.customImagesLoaded[2];
      this.patternFour = this.customImagesLoaded[3];
      this.patternFive = this.customImagesLoaded[4];
      this.patternSix = this.customImagesLoaded[5];
    }
    if (recurseStep === undefined) {
      this.offset_x = (Math.random() * 50) - 50;
      this.offset_y = (Math.random() * 50) - 50;

      this.genType = this.genTypeArr[Math.floor(Math.random() * this.genTypeArr.length)];
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();

      // if no recurse, this means t his is a new piece, not just a layer, so clear and calculate recurse chance
      this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
      this.ctx.fillStyle = 'white';
      this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
      this.ctx.translate(this.offset_x, this.offset_y);
      if(!dark) {
      recurse = this.utilities.randomlyChooseTrueOrFalseLessHalf();
      } else {
        recurse = false;
      }
      this.recurse = recurse;
      this.ctx.scale(this.restoreScale, this.restoreScale);
      this.ctxTwo.scale(this.restoreScale,this.restoreScale);
      if(recurse) {
        this.ctx.scale(.5175, .5175)
        this.ctxTwo.scale(.5175, .5175)
        this.restoreScale = 1.932367149758454;
      } else {
        this.ctx.scale(.639, .639)
        this.ctxTwo.scale(.639, .639)
        this.restoreScale = 1.56494522692;
      }
        this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;

      this.singleLayer = true;
      if (!recurse) {
        this.singleLayer = true;
        this.forceTrapezoidBeginPath = this.utilities.randomlyChooseTrueOrFalse();
        this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);

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

          // this.patternFive = darkOne;
          // this.patternTwo = darkThree;
          // this.patternOne = darkFour;

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
        if (!this.customImagesActive) {
          const maxDarkIndex = this.patternDatabaseList.length - 1;
  
          var one = Math.floor(Math.random() * maxDarkIndex);
          var three = Math.floor(Math.random() * maxDarkIndex);
          var four = Math.floor(Math.random() * maxDarkIndex);
          var five = Math.floor(Math.random() * maxDarkIndex);
  
          if (this.patternDatabaseList.length >= 6) {
            
            const darkThree = this.patternDatabaseList[three];
            this.patternOne = darkThree;
            this.patternTwo = darkThree;
            this.patternThree = darkThree;
            const darkFour = this.patternDatabaseList[four];
            
            this.patternFour = darkThree;
            const darkFive = this.patternDatabaseList[five];
            this.patternFive = darkFive;
            this.patternSix =  darkFive;
          }
        }

        recurseStep = Math.floor(Math.random() * 5) + 4;
        this.startingRecurseStep = recurseStep;
        if (recurseStep > 18) {
          this.largeRecurseStep = true;
        } else {
          this.largeRecurseStep = false;
        }
        var img = new Image();
        img.src = this.canvas.toDataURL();
        img.onload = function () {
          this.ctx.drawImage(img, 0, 0, this.fullCanvasSize, this.fullCanvasSize, 0, 0, this.fullCanvasSize, this.fullCanvasSize);
          this.getRandomArtAlg(clear, recurse, recurseStep);
        }.bind(this);

      } else {
        await this.getRandomArtAlg(clear, recurse, recurseStep);
      }
    } else {
    }
  }

  largeRecurseStep = false;
  forceBeginPath = false;

  async getRandomArtAlg(clear, recurse, recurseStep) {
    this.patternFillSingleBegun = false;

    this.beginPath = this.utilities.randomlyChooseTrueOrFalse();
    this.randomScheme = "Random";
    let rand = 1;
    this.patternOffset = 0;

    // first layer of small objects;
    this.resetForNewLayer();
    await this.getFirstSmallLayer();
    this.resetForNewLayer();

    // layer of transparent objects
    // if(this.recurse) {
    //   console.log('SETTING TRANS TO DARK');
    //   this.dark = true;
    // }
    let norm = true;
    // rand = Math.floor(Math.random() * 3) + 1;
    // if (rand === 2) {
    //   norm = false;
    // }
    // norm = true;

    // let trapTrans = 2;
    // if (rand === 2) {
    //   trapTrans = this.utilities.randomlyChooseOneOrTwo();
    // }
    let trapTrans = 1;
    let layerNum = 10;
    if (norm || trapTrans === 1) {
      if (trapTrans === 1) {
        if(this.startingRecurseStep === recurseStep) {
        layerNum = 30;
        }
        this.backgroundShapeArr = ['Rectangle', 'Circle', 'Line'];
      } else {
        this.backgroundShapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
      }
      while (this.layerCounter < layerNum) {
        // this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        this.randomColor = await this.getRandomRgb();
        this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ')';
        this.randomStrokeOpacity = Math.random() * 1;
        this.randomShapeOpacity = Math.random() * 1;
        var randomShape = this.backgroundShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
        var stroke = await this.getRandomRgb();
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
        rand = this.utilities.randomlyChooseOneOrTwo();
        if (rand === 1) {
          this.ctx.strokeStyle = 'black';
        }

        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";

        this.ctx.globalAlpha = .4 - (layerNum / this.layerCounter * .01);
        this.ctx.fillStyle = this.randomColor;

        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
        this.ctx.lineWidth = Math.random() * 10;

        if (this.singleLayer) {
          this.ctx.lineWidth = Math.random() * 3.2;
          const rand = this.utilities.randomlyChooseTrueOrFalse();
          if (rand) {
            if (this.forceTrapezoidBeginPath) {
              this.ctx.lineWidth = Math.random() * 10;
            } else {
              this.ctx.lineWidth = Math.random() * 7;
            }
          }
        }
        await this.drawShape(randomShape);
        this.layerCounter++;
      }
    }
    this.resetForNewLayer();
    // layer of main shapes
    let objNum = this.objNum;
    if (this.genType === 'transPattern') {
      objNum = Math.floor(Math.random() * 23) + 19;
    }
    if(this.recurse) {
      this.normalColor = true;
    }
    if (recurseStep !== undefined) {
      await this.getMainLayer(objNum, norm, rand, trapTrans, recurseStep);

    } else {
      await this.getMainLayer(objNum, norm, rand, trapTrans);

    }
    this.resetForNewLayer();

    // second small layer
    if (this.singleLayer) {
      // this.getFirstSmallLayer(true);
      await this.getSecondSmallLayer(norm);

    } else {
      await this.getSecondSmallLayer(norm);
    }
    this.resetForNewLayer();

    if (this.singleLayer) {
      this.forceBeginPath = true;
      await this.getFirstSmallLayer(true);
      this.resetForNewLayer();
      this.forceBeginPath = false;
    }
    this.ctx.globalAlpha = 1;
    if (recurse && recurseStep && recurseStep > 1) {
      recurseStep--;
      await this.getRandomArt(clear, recurseStep);
    } else {
      this.saveCurrentArt(clear);
      this.ctx.translate(-this.offset_x, -this.offset_y);
    }
  }
  async getSecondSmallLayer(norm) {
    let count = 25;
    // norm = true;
    if (norm) {
      count = 45;
    }
    if (this.singleLayer) {
      count = 60;
    }
    while (this.layerCounter <= count) {
      // this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      let light = true;
      if(!this.recurse) {
        light = this.utilities.randomlyChooseTrueOrFalse();
      }
      this.randomColor = await this.getRandomRgb(false, light);
      this.randomStrokeOpacity = Math.random() * 1;

      this.randomShapeOpacity = Math.random() * .5;
      
      if(!this.recurse && ((this.randomColor.r + this.randomColor.g + this.randomColor.b)  < 220)) {
        this.randomShapeOpacity = Math.random() * .4;
      }
      const randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      const stroke = await this.getRandomRgb(true);

      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      const blackStroke = this.utilities.randomlyChooseTrueOrFalse();
      if (blackStroke && this.recurse) {
        this.ctx.strokeStyle = 'black';
      }
      this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ',' + this.randomShapeOpacity + ")";

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
      if(this.recurse) {
        this.patternFill = true;
      }
      this.ctx.lineWidth = Math.random() * 10;

      if (this.singleLayer) {
        this.ctx.lineWidth = Math.random() * 3.2;
        if(!this.recurse) {
          this.ctx.lineWidth = Math.random() * 3.2;
        }
        const rand = this.utilities.randomlyChooseTrueOrFalse();
        if (rand) {
          if (this.forceTrapezoidBeginPath) {
            this.ctx.lineWidth = Math.random() * 8;
          } else {
            this.ctx.lineWidth = Math.random() * 7;
          }
        }
      }
      await this.drawShape(randomShape, true);
      this.layerCounter++;
    }
  }
  async getFirstSmallLayer(smallCount?: boolean) {
    let smallCounter = 25;
    if (this.singleLayer) {

      smallCounter = 100;
      if (smallCount) {
        smallCounter = 65;
        if (this.forceBeginPath) {
          smallCounter = 45;
        }
      }
    }
    while (this.layerCounter <= smallCounter) {
      this.randomColor = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
      this.randomStrokeOpacity = Math.random();
      this.randomShapeOpacity = Math.random();
      let rand = this.utilities.randomlyChooseOneOrTwo();
      if (rand === 1) {
        // this.ctx.strokeStyle = 'black';
      }
      rand = Math.floor(Math.random() * 2) + 1;

      if (rand === 1 && smallCount && this.layerCounter === smallCounter) {
        // if(this.randomShapeOpacity < .5) {
        //   this.randomShapeOpacity = .6;
        // }
        // this.randomShapeOpacity = 0;
        // this.randomShapeOpacity = Math.random() + .5

      }
      var randomShape = this.smallShapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      var stroke = await this.getRandomRgb();
      if (this.randomScheme === 'Complementary') {
        var complStroke = this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
        this.ctx.strokeStyle = complStroke.substring(0, complStroke.length - 1) + ',' + this.randomStrokeOpacity + ")";
      } else if (this.randomScheme !== 'Monochromatic') {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      } else {
        this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ', 1)';
      }

      // if (!this.isSafari) {
      this.ctx.globalAlpha = 1;
      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
      // if(!smallCount) {
      // if(!smallCount || (smallCount && this.layerCounter > 2 && !this.forceBeginPath)) {
      // if(!smallCount || (smallCount && !this.forceBeginPath)) {
      // if(!this.forceBeginPath) {
      // if (!this.forceBeginPath && smallCount && smallCounter >= 1) {
      //   rand = 2
      // }
      if (smallCount && !this.forceBeginPath && smallCounter < 2) {
        // rand = 2;
      }


      if (rand === 1) {
        this.ctx.globalAlpha = this.randomShapeOpacity;
      } else {
        // if (smallCount && !this.forceBeginPath) {
        //   this.randomShapeOpacity = Math.random() * .5;
        //   this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
        // }
      }
      // }
      // }
      // } 
      // else {
      //   this.ctx.globalAlpha = this.randomShapeOpacity;
      // }
      this.ctx.fillStyle = this.randomColor;
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      // if (rand !== 1 && smallCount && !this.forceBeginPath && (!this.patternFill || smallCounter < 20)) {
      if (rand !== 1 && smallCount && !this.forceBeginPath && !this.patternFill) {
        this.randomShapeOpacity = Math.random() * .5;
        this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";
        this.ctx.fillStyle = this.randomColor;
      }
      this.ctx.lineWidth = Math.random() * 10;
      if (this.singleLayer) {
        this.ctx.lineWidth = Math.random() * 3.2;
        const rand = this.utilities.randomlyChooseTrueOrFalse();
        if (rand) {
          if (this.forceTrapezoidBeginPath) {
            this.ctx.lineWidth = Math.random() * 10;
          } else {
            this.ctx.lineWidth = Math.random() * 5;
          }
        }
      }
      await this.drawShape(randomShape, true);
      this.layerCounter++;
    }
  }
  resetForNewLayer() {
    this.layerCounter = 0;
    this.ctx.globalAlpha = 1;
    this.aggrObjArea = 0;
    this.dark = false;
    this.normalColor = false;
    this.shapeArr = ['Rectangle', 'Triangle', 'Circle', 'Line'];
  }
  async getMainLayer(objNum, norm, rand, trapTrans, recurseStep?) {
    this.shapeArr = ['Rectangle', 'Triangle', 'Line'];
    if (this.genType !== 'random') {
      this.patternFill = false;
    } else {
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      if (this.patternFill === false) {
        this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      }
    }

    // norm = false;
    // if (!norm) {
      objNum = Math.floor(Math.random() * 1) + 5;
      this.shapeArr = ['Trapezoid', 'Line'];

      if (this.singleLayer) {
        objNum = 6;
        // this.beginPath = false;
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
          if (this.patternFill === false) {
            this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            if (this.patternFill === false) {
              this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
            }
          }
        }
      }
    // }
    while (this.layerCounter < objNum) {
      let light = false;
      if(this.recurse) {
        light = true;
      }
      this.randomColor = await this.getRandomRgb(false, true);
      this.randomColor = 'rgb(' + this.randomColor['r'] + ',' + this.randomColor['g'] + ',' + this.randomColor['b'] + ')';
      this.randomShapeOpacity = Math.random();
      if (this.randomShapeOpacity < 0) {
        this.randomShapeOpacity = 0;
      }
      if (this.layerCounter === (objNum)) {
        this.randomShapeOpacity = 0;
        this.patternFill = false;
      }
      // if (!this.recurse && this.layerCounter === (objNum - 2)) {
      //   this.randomShapeOpacity = .1;
      // }
       
      if (!this.recurse && this.layerCounter === (objNum - 1)) {
        this.randomShapeOpacity = .1;
      }
      if (this.singleLayer) {
        if(this.recurse) {
          this.ctx.globalAlpha = this.layerCounter / objNum + .2;
        } else {
        this.ctx.globalAlpha = this.layerCounter / objNum + .1;
        }
      } else {
        // if(this.utilities.randomlyChooseTrueOrFalse()) {
        this.ctx.globalAlpha = this.layerCounter / objNum + .1;

        // }
      }

      var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // if (this.singleLayer && randomShape !== 'Line') {
      //   var randomShape = this.shapeArr[Math.floor(Math.random() * this.shapeArr.length)];
      // }
      // var stroke = await this.getRandomRgb(false, false, dark);
      // this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';


      rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = 'black';
      } else {
      const dark = this.utilities.randomlyChooseOneOrTwo();
      var stroke = await this.getRandomRgb(false, false, dark);
      this.ctx.strokeStyle = 'rgb(' + stroke['r'] + ',' + stroke['g'] + ',' + stroke['b'] + ')';
      }

      this.randomColor = this.randomColor.substring(0, this.randomColor.length - 1) + ',' + this.randomShapeOpacity + ")";

      this.ctx.fillStyle = this.randomColor;
      // default is middle
      let newLineWidth = Math.random() * 5 + 1;
      if (this.layerCounter < (objNum / 4) || (this.layerCounter > (objNum * .5) && this.layerCounter < (objNum * .6))) {
        newLineWidth = Math.random() * 20 + 16;


        if (this.layerCounter === (objNum - 1) || this.layerCounter === (objNum)) {
          newLineWidth = Math.random() * 20 + 16;
          this.ctx.globalAlpha = 1;

        }
        if (this.layerCounter === (objNum - 2)) {
          newLineWidth = Math.random() * 20 + 16;
          this.ctx.globalAlpha = 1;

        }
        if (!this.singleLayer && recurseStep === 1) {
          if (this.layerCounter === (objNum - 3)) {
            newLineWidth = Math.random() * 20 + 16;

          }
        }
        if (recurseStep < 3) {
          this.ctx.globalAlpha = 1;
        }
      }

      this.ctx.lineWidth = newLineWidth;

      if (this.singleLayer) {
        this.patternFill = true;
        this.ctx.lineWidth = Math.random() * 3.2;
        const rand = this.utilities.randomlyChooseTrueOrFalse();
        if (rand) {
          this.ctx.lineWidth = Math.random() * 10;
        }
      }
      await this.drawShape(randomShape, false, true);

      this.layerCounter++;
    }
  }
  patternFillSingleBegun = false;
  transform = false;
  repeat: string = 'repeat';
  leftmostPoint = 0;
  setXYExtremes(xPos: number, yPos: number, small: boolean) {
    if (xPos < this.leftmostPoint) {
      this.leftmostPoint = xPos;
    }
    if (xPos > this.rightmostPoint) {
      this.rightmostPoint = xPos;
    }

    if (yPos > this.rightmostPoint) {
      this.lowestPoint = xPos;
    }
  }

 onload2promise(obj): Promise<any> {
    return new Promise((resolve, reject) => {
    obj.onload = () => resolve(obj);
    obj.onerror = reject;
  });
 }

  async drawShape(shape, small?, main?) {
    this.repeat = this.utilities.randomlyChooseTrueOrFalse() ? 'no-repeat' : 'repeat';

    var offset_x = 0;
    var offset_y = 0;
    var xPos = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2.5);
    var yPos = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2.75);

    // small
    this.setXYExtremes(xPos, yPos, small);
    var height = (Math.random() * this.canvasSize) / 2;
    var width = (Math.random() * this.canvasSize) / 2;
    let currObjArea = height * width;

    this.patternSwitch = Math.floor(Math.random() * 8) + 1;
    rand = this.utilities.randomlyChooseOneOrTwo();
    if (this.genType === "noPattern" && main) {
      this.patternFill = true;
    }

    if(this.recurse) {
      this.patternFill = true;
    }
    if (this.patternFill) {
      // this.ctx.translate(this.offset_x, this.offset_y);
      if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {
      this.patternFillSingleBegun = true;
           } else {
      offset_x = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
      offset_y = Math.floor(Math.random() * this.canvasSize / 2.5) - this.canvasSize / 2.5;
      // this.ctx.translate(offset_x, offset_y);
           }
      if (this.patternSwitch === 1) {

      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await  this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
           } else if (this.patternSwitch === 2) {
      if (rand === 1) {
      this.currentImage = this.patternTwo;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
             } else if (rand === 2) {
      this.currentImage = this.patternFour;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
             }
           } else if (this.patternSwitch === 3) {
      this.currentImage = this.patternSix;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
     
           } else if (this.patternSwitch === 4) {
      if (rand === 1) {
      this.currentImage = this.patternFour;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
     
             } else if (rand === 2) {
      this.currentImage = this.patternSix;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
             }
           } else if (this.patternSwitch === 5) {
      this.currentImage = this.patternTwo;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternTwo, this.repeat);
           } else if (this.patternSwitch === 6) {
      this.currentImage = this.patternOne;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
           } else if (this.patternSwitch === 7) {
      this.currentImage = this.patternFive;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
           } else {
      this.currentImage = this.patternFour;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
           }
      if (this.isFrieze && main) {
      this.currentImage = this.patternThree;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternThree, this.repeat);
           }
      if (this.isFriezeTwo && main) {
      this.currentImage = this.patternFive;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFive, this.repeat);
           }
      if (this.isTrunks && main) {
      this.currentImage = this.patternSix;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternSix, this.repeat);
     
           }
      if (this.isArabesque && main) {
      this.currentImage = this.patternOne;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      this.ctx.fillStyle = this.ctx.createPattern(this.patternOne, this.repeat);
           }
     
      if (this.isMexico && main) {
      this.currentImage = this.patternFour;
      this.currentImage = this.patternThree;
      if(!this.currentImage.complete) {
        await this.onload2promise(this.currentImage);
      }
      console.log('this.currentImage', this.currentImage);
      this.ctx.fillStyle = this.ctx.createPattern(this.patternFour, this.repeat);
           }
     
      if (this.isBedroom && main) {
      this.currentImage = this.patternBedroom;
      this.ctx.fillStyle = this.ctx.createPattern(this.patternBedroom, this.repeat);
           }
    } else {
      console.log('NOT PATTERN', 'this.recurse', this.recurse);
    }

    rand = Math.floor(Math.random() * 100) + 1;

    if (small || (this.aggrObjArea + currObjArea + 250) >= (Math.pow(this.canvasSize, 2))) {
      height = Math.random() * this.canvasSize / 25;
      width = Math.random() * this.canvasSize / 25;
      currObjArea = height * width;
    }

    switch (shape) {
      case 'Rectangle':
        if ((xPos + width + this.offset_x+ this.ctx.lineWidth) > this.fullCanvasSize) {
          width = (this.fullCanvasSize - xPos - this.offset_x - this.ctx.lineWidth - 2);
        }
        if ((yPos + height + this.offset_y + this.ctx.lineWidth) > this.fullCanvasSize) {
          height = (this.fullCanvasSize - yPos - this.offset_y - this.ctx.lineWidth - 10);
        }
        this.setXYExtremes(width + xPos, height + yPos, small);


        this.ctx.fillRect(xPos, yPos, width, height);
        this.ctx.strokeRect(xPos, yPos, width, height);
        break;
      case 'Trapezoid':
        // omitting begin path triggers the wireframe look
        if (!this.forceBeginPath && this.singleLayer) {
          if (this.forceTrapezoidBeginPath) {
            this.ctx.beginPath();
          }

        } else {
          const dontBeginPath = this.utilities.randomlyChooseTrueOrFalse10Real();
          if (dontBeginPath) {
            this.ctx.beginPath();
          }
        }

        if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
          if (!this.utilities.randomlyChooseTrueOrFalseThird()) {
            if (!this.utilities.randomlyChooseTrueOrFalseThird()) {


              // this.ctx.lineWidth = 2;
            }
          }
        }

        let rand1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        let y1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);

        if (y1 > this.fullCanvasSize + this.offset_y + this.ctx.lineWidth) {
          y1 = (this.fullCanvasSize  - this.offset_y - this.ctx.lineWidth- 5);
        }
        this.setXYExtremes(rand1, y1, small);

        //first point
        this.ctx.moveTo(rand1, y1);
        let rand2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        //second point completes first side
        let y2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        if (y2 > this.fullCanvasSize) {
          y2 = (this.fullCanvasSize - 10);
        }
        this.ctx.lineTo(rand2, y2);

        this.setXYExtremes(rand2, y2, small);

        let rand3 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        let y3 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        if (y3 > this.fullCanvasSize) {
          y3 = (this.fullCanvasSize - 10);
        }
        this.setXYExtremes(rand3, y3, small);

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

        if (y4 > this.fullCanvasSize) {
          y4 = (this.fullCanvasSize - 10);
        }
        this.setXYExtremes(rand4, y4, small);

        this.ctx.lineTo(rand4, y4);
        this.ctx.fill();
        this.ctx.lineTo(rand1, y1);
        this.ctx.stroke();
        currObjArea = this.calcPolygonArea([{ x: rand1, y: y1 }, { x: rand2, y: rand1 }, { x: rand3, y: rand2 }, { x: rand4, y: y2 }]);

        break;
      case 'Triangle':

        if (!this.forceBeginPath && this.singleLayer) {
          if (!this.forceTrapezoidBeginPath) {
            this.ctx.beginPath();
          }

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
        let ty1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        let ty2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);

        // vertex one
        if (ty1 > this.fullCanvasSize + this.ctx.lineWidth + this.offset_y) {
          ty1 = (this.fullCanvasSize - this.offset_y - this.ctx.lineWidth - 5);
        }
        this.ctx.moveTo(rand1, ty1);
        
        this.setXYExtremes(0, ty1, small);

        // vertex two
        this.ctx.lineTo(rand2, rand1);
        // this.ctx.stroke();
        if (rand1 > this.fullCanvasSize) {
          rand1 = (this.fullCanvasSize - 10);
        }
        this.setXYExtremes(0, rand1, small);

        if (ty2 > (this.fullCanvasSize + this.ctx.lineWidth + this.offset_y)) {
          ty2 = (this.fullCanvasSize - this.ctx.lineWidth - this.offset_y - 5);
        }
        // vertex three
        this.ctx.lineTo(rand2, ty2);
     
        this.setXYExtremes(0, ty2, small);

        this.ctx.stroke();

        this.ctx.lineTo(rand1, ty1);

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
        rand1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        var rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          rand2 = rand1 + 15;
        } else {
          rand2 = rand1 - 15;
        }
        let ly1 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);
        let ly2 = (Math.random() * this.canvasSize) + ((this.fullCanvasSize - this.canvasSize) / 2);

        this.setXYExtremes(rand1, ly1, small);
        this.setXYExtremes(rand2, rand1, small);
        this.setXYExtremes(rand2, ly2, small);

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
        if ((xPos - radius + this.offset_x - this.ctx.lineWidth) < 0) {
          if (this.offset_x < 0) {
            xPos = radius - this.offset_x + this.ctx.lineWidth + 5;
          } else {
            xPos = radius + this.ctx.lineWidth + 5;
          }
        }
        if ((yPos - radius + this.offset_y - this.ctx.lineWidth) < 0) {
          if (this.offset_y < 0) {
            yPos = radius - this.offset_y + this.ctx.lineWidth + 5;
          } else {
            yPos = radius + this.ctx.lineWidth + 5;
          }
        }
        this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();

        this.setXYExtremes(width + xPos, width + yPos, small);

        currObjArea = Math.PI * Math.pow(radius, 2);
        // get better with calculating for circles
        break;
    }
    if (this.patternFill) {
      if (!this.patternFillSingleBegun && (this.isFrieze || this.isFriezeTwo || this.isTrunks || this.isArabesque || this.isMexico || this.isBedroom)) {

      } else {
      }
    }

    this.aggrObjArea += currObjArea;
    // if(this.transform) {

    // this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    // this.ctx.restore();    // }

  }

  renderImage(index?: number, favorites?: boolean) {
    // if((this.fullCanvasSize - this.rightmostPoint) < (this.fullCanvasSize - (this.canvasSize * 1.5)/2)) {
    let overflowX = this.rightmostPoint - (this.canvasSize + ((this.fullCanvasSize - this.canvasSize) / 2));
    let overflowY = this.lowestPoint - (this.canvasSize + ((this.fullCanvasSize - this.canvasSize) / 2));
    overflowY = 0;
    if (overflowX > ((this.fullCanvasSize - this.canvasSize) / 2)) {
      overflowX = ((this.fullCanvasSize - this.canvasSize) / 2);
    }

    if (overflowX > ((this.fullCanvasSize - this.canvasSize) / 2)) {
      overflowX = ((this.fullCanvasSize - this.canvasSize) / 2);
    }
    console.log('leftmost point', this.leftmostPoint, 'starting point', ((this.fullCanvasSize - this.canvasSize) / 2));
    let startingPointDiff = 0;
    if (this.leftmostPoint < ((this.fullCanvasSize - this.canvasSize) / 2)) {
      startingPointDiff = ((this.fullCanvasSize - this.canvasSize) / 2) - this.leftmostPoint;
      console.log('this.leftmost')
      if (this.leftmostPoint && startingPointDiff) {
        //  this.ctx.translate((startingPointDiff), (overflowY/2))
        //  this.ctxTwo.translate((startingPointDiff), (overflowY/2))
      }
    } else {
      overflowX = overflowX - ((this.leftmostPoint - ((this.fullCanvasSize - this.canvasSize) / 2)) * 2);
    }

    // this.ctx.translate((-overflowX/2), (overflowY/2))

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
    this.ctxTwo.save();

    this.ctxTwo.scale(this.restoreScale, this.restoreScale);
    img.onload = function () {
      this.ctx.drawImage(img, 0, 0, this.canvasSize, this.canvasSize, 0, 0, this.canvasSize, this.canvasSize);
      this.drawImageScaled(img, this.ctxTwo)
      if (this.singleLayer) {
        // this.ctx.restore();
      }

      // this.ctxTwo.translate((overflowX/2), (-overflowY/2))
      if (this.leftmostPoint && startingPointDiff) {
        // this.ctxTwo.translate((-startingPointDiff), (overflowY/2))
      }

      this.ctxTwo.restore();
    
      this.renderDone = true;
      this.renderDoneEmit.emit(true);
      this.loader.nativeElement.style.visibility = "hidden";
      if (index === undefined) {
        this.updateCurrentIndex.emit(this.savedImageArr.length - 1);
      }
      console.log('this.gentype', this.genType, 'is single layer', this.singleLayer);
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
    // this.renderDone = true;
    // this.renderDoneEmit.emit(true);
    this.renderImage();
  }

  setCustomImages(clear) {
    this.patternOne.src = this.customImages[0].src
    this.patternOne.crossOrigin = "Anonymous";
    this.patternOne.onload = function () {
      const pattern = this.ctx.createPattern(this.patternOne, this.repeat);
      this.ctx.fillStyle = pattern;
      this.customImages[0].ready = true;
      this.customImagesLoaded.push(this.patternOne);

      this.patternTwo.src = this.customImages[1].src;
      this.patternTwo.onload = function () {
        const pattern = this.ctx.createPattern(this.patternTwo, this.repeat);
        this.ctx.fillStyle = pattern;
        this.customImages[1].ready = true;
        this.customImagesLoaded.push(this.patternTwo);
        this.patternThree.src = this.customImages[2].src;
        this.patternThree.onload = function () {
          const pattern = this.ctx.createPattern(this.patternThree, this.repeat);
          this.ctx.fillStyle = pattern;
          this.customImages[2].ready = true;
          this.customImagesLoaded.push(this.patternThree);

          this.patternFour.src = this.customImages[3].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(this.patternFour, this.repeat);
            this.ctx.fillStyle = pattern;
            this.customImages[3].ready = true;
            this.customImagesLoaded.push(this.patternFour);
            this.patternFive.src = this.customImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(this.patternFive, this.repeat);
              this.ctx.fillStyle = pattern;
              this.customImages[4].ready = true;
              this.customImagesLoaded.push(this.patternFive);
              this.patternSix.src = this.customImages[5].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(this.patternSix, this.repeat);
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
  async getRandomColorArr() {
    var tempRgb = await this.getRandomRgb();
    var complementaryColorArr = ['rgb(' + tempRgb.r + ',' + tempRgb.g + ',' + tempRgb.b + ')'];
    var currRgb = tempRgb;

    for (var i = 0; i < 6; i++) {
      currRgb = await this.getRandomRgb();      
      complementaryColorArr.push(this.convertToRgbString(currRgb));
    }

    return complementaryColorArr;
  }
  convertToRgbString(rgbObj) {
    return 'rgb(' + rgbObj.r + ',' + rgbObj.g + ',' + rgbObj.b + ')';
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

  //Adding hueShift 
  hueShift(h, s) {
    h += s; while (h >= 360.0) h -= 360.0; while (h < 0.0) h += 360.0; return h;
  }

  //min max 
  min3(a, b, c) {
    return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
  }
  max3(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  }
  lastImageColor;
  currentImage;
  async setLastImageColor() {
    const fac = new FastAverageColor();
   
    this.lastImageColor = await fac.getColorAsync(this.currentImage)
  }
  async getRandomRgb(isSecondSmallLayer?, light?, dark?) {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;

    if(isSecondSmallLayer) {
      await this.setLastImageColor();
      if((this.lastImageColor.r + this.lastImageColor.g + this.lastImageColor.b) < 400) {
        while(((r + g + b) < 620)) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = num >> 8 & 255;
          b = num & 255;
      }
    } 
    else {
      while((r + g + b) > 120) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = num >> 8 & 255;
          b = num & 255;
      }
    } 
  } else {
    // if(light) { 
      if(this.utilities.randomlyChooseTrueOrFalseThirdReal() && !light) {
  while( ((r + g + b) < 620) )  { 
      num = Math.round(0xffffff * Math.random());
      r = num >> 16;
      g = num >> 8 & 255;
      b = num & 255;
  }
} else {
  while( ((r + g + b) < 620) && (( ((r + g + b) > 220) || ((r + g + b) < 120)) ))  { 
    num = Math.round(0xffffff * Math.random());
    r = num >> 16;
    g = num >> 8 & 255;
    b = num & 255;
}
}
if(light) {
  while( ((r + g + b) < 620) )  { 
    num = Math.round(0xffffff * Math.random());
    r = num >> 16;
    g = num >> 8 & 255;
    b = num & 255;
}
}

if(dark) {
 while (((r + g + b) > 220) || ((r + g + b) < 120))  { 
    num = Math.round(0xffffff * Math.random());
    r = num >> 16;
    g = num >> 8 & 255;
    b = num & 255;
}
}
//   }
}

    const retVal = { 'r': r, 'g': g, 'b': b };
    return retVal;
  }
}

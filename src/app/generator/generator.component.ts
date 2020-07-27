import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { Utilities } from "./utilities";
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import FastAverageColor from "fast-average-color";

@Component({
  selector: "generator",
  templateUrl: "./generator.component.html",
  styleUrls: ["./generator.component.css"],
  providers: [Utilities],
})
export class GeneratorComponent implements OnInit {
  @ViewChild("loaderCanvas") loader;
  @Output()
  saveImageFirebase = new EventEmitter<any>();
  @Output()
  renderDoneEmit = new EventEmitter<boolean>();

  @Input() savedImageArr = [];
  @Input() favoritesArr = [];
  @Input() currImageIndex = 0;
  @Input() customImages;
  @Input() customImagesActive: boolean = false;
  @Output() updateCurrentIndex = new EventEmitter();
  aggrObjArea = 0;
  backgroundShapeArr = ["Rectangle", "Triangle", "Circle", "Line"];
  canvas;
  canvasSize = 700;
  canvasTwo;
  canvasSizeTwo = 700;
  colorArr = [];
  ctx;
  ctxTwo;
  genTypeArr = ["noPattern", "transPattern", "random"];
  genType;
  layerCounter = 0;
  patternFill = false;
  patternSwitch;
  randomColor;
  randomStrokeOpacity;
  randomShapeOpacity;
  shapeArr = ["Rectangle", "Triangle", "Circle", "Line"];
  smallShapeArr = ["Rectangle", "Circle"];
  patternOne;
  patternTwo;
  patternThree;
  patternFour;
  patternFive;
  patternSix;
  renderDone = false;
  singleLayer;
  // isTrunks;
  // isFrieze;
  // isFriezeTwo;
  // isArabesque;
  // isMexico;
  patternDatabaseList = [];
  darkDatabaseList = [];
  transDatabaseList = [];
  recurse;
  // feature detection
  startingRecurseStep = 0;
  customImagesLoaded = [];
  initialImages = [
    {
      name: "uploadCustom1",
      crossOrigin: "Anonymous",
      src: "assets/arabesque_pattern.jpg",
      ready: true,
      fileTooBig: false,
    },
    {
      name: "uploadCustom2",
      crossOrigin: "Anonymous",
      src: "assets/kosovo_map.jpg",
      ready: true,
      fileTooBig: false,
    },
    {
      name: "uploadCustom3",
      crossOrigin: "Anonymous",
      src: "assets/frieze.jpg",
      ready: true,
      fileTooBig: false,
    },
    {
      name: "uploadCustom4",
      crossOrigin: "Anonymous",
      src: "assets/mexico_flag.jpg",
      ready: true,
      fileTooBig: false,
    },
    {
      name: "uploadCustom5",
      crossOrigin: "Anonymous",
      src: "assets/van.jpg",
      ready: true,
      fileTooBig: false,
    },
    {
      name: "uploadCustom6",
      crossOrigin: "Anonymous",
      src: "assets/trunks.png",
      ready: true,
      fileTooBig: false,
    },
  ];
  artImagesSubscription;
  restoreScale;
  offset_x: number = 0;
  offset_y: number = 0;
  fullCanvasSize: number = 0;
  forceTrapezoidBeginPath: boolean;
  genStarted = false;
  transWithRecurse = false;
  forceBeginPath = false;
  wasRecurse = false;
  repeat: string = "repeat";
  lastImageColor;
  currentImage;

  constructor(public http: HttpClient, public utilities: Utilities) {
    this.utilities = utilities;
  }

  async ngOnInit() {
    this.initiatePatterns();
    this.calculateCanvasSize();
    this.getLibrary();
  }

  getLibrary() {
    var storageRef = firebase.storage().ref();
    if (
      this.darkDatabaseList.length === 0 ||
      this.patternDatabaseList.length === 0
    ) {
      return new Promise((resolve) => {
        if (!this.artImagesSubscription) {
        }
        this.artImagesSubscription = this.http
          .get(window.location.origin + "/artImages")
          .subscribe(
            async function (this, res: any) {
              res.forEach(
                function (this, item) {
                  if (item["metadata"]["name"].indexOf("dark") > -1) {
                    storageRef
                      .child(item["metadata"]["name"])
                      .getDownloadURL()
                      .then(
                        async function (this, url) {
                          const darkImage = new Image();
                          darkImage.name = item["metadata"]["name"];
                          darkImage.crossOrigin = "Anonymous";
                          darkImage.src = url;
                          this.darkDatabaseList.push(darkImage);
                          if (!this.genStarted) {
                            if (this.darkDatabaseList.length === 6) {
                              this.genStarted = true;
                              await this.getRandomArt(true, undefined, true);
                            }
                          }
                        }.bind(this)
                      );
                  } else if (item["metadata"]["name"].indexOf("trans") > -1) {
                    storageRef
                      .child(item["metadata"]["name"])
                      .getDownloadURL()
                      .then(
                        function (this, url) {
                          const transImage = new Image();
                          transImage.crossOrigin = "Anonymous";
                          transImage.name = item["metadata"]["name"];
                          transImage.src = url;
                          this.transDatabaseList.push(transImage);
                        }.bind(this)
                      );
                  } else {
                    storageRef
                      .child(item["metadata"]["name"])
                      .getDownloadURL()
                      .then(
                        async function (this, url) {
                          const darkImage = new Image();
                          darkImage.crossOrigin = "Anonymous";
                          darkImage.name = item["metadata"]["name"];
                          darkImage.src = url;
                          this.patternDatabaseList.push(darkImage);
                          if (!this.genStarted) {
                            if (this.patternDatabaseList.length === 6) {
                              this.genStarted = true;
                              await this.getRandomArt(true, undefined, false);
                            }
                          }
                        }.bind(this)
                      );
                  }
                }.bind(this)
              );
              resolve();
            }.bind(this)
          );
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

    this.patternFive = new Image();
    this.patternFive.crossOrigin = "Anonymous";

    this.patternSix = new Image();
    this.patternSix.crossOrigin = "Anonymous";

    this.patternOne.src = this.initialImages[4].src;
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
          const pattern = this.ctx.createPattern(
            this.patternThree,
            this.repeat
          );
          this.ctx.fillStyle = pattern;

          this.patternFour.src = this.initialImages[4].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(
              this.patternFour,
              this.repeat
            );
            this.ctx.fillStyle = pattern;

            this.patternFive.src = this.initialImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(
                this.patternFive,
                this.repeat
              );
              this.ctx.fillStyle = pattern;
              this.patternSix.src = this.initialImages[4].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(
                  this.patternSix,
                  this.repeat
                );
                this.ctx.fillStyle = pattern;
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
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = "high";
    this.canvasTwo = <HTMLCanvasElement>document.getElementById("myCanvasTwo");
    this.canvasTwo.height = this.canvasTwo.clientHeight;
    this.canvasTwo.width = this.canvasTwo.clientHeight;
    this.ctxTwo = this.canvasTwo.getContext("2d");
    this.canvasSizeTwo = this.canvasTwo.clientHeight;
    this.ctxTwo.imageSmoothingEnabled = true;
    this.ctxTwo.imageSmoothingQuality = "high";

    this.ctxTwo.canvas.width = this.canvasSizeTwo;
    this.ctxTwo.canvas.height = this.canvasSizeTwo;

    this.ctx.scale(0.5175, 0.5175);
    this.ctxTwo.scale(0.5175, 0.5175);
    this.restoreScale = 1.932367149758454;
    this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.fullCanvasSize, this.fullCanvasSize);
  }

  async getRandomArt(clear, recurseStep?, dark?) {
    this.colorArr = await this.getRandomColorArr();
    // hide favorites because we're about to switch to savedimagearr
    // hiding stuff since a new image is being drawn]
    this.loader.nativeElement.style.visibility = "visible";
    this.singleLayer = false;
    //these values are related to what the art will look like
    this.patternFill = this.utilities.randomlyChooseTrueOrFalse();

    // this.isTrunks = false;
    // this.isArabesque = false;
    // this.isMexico = false;
    // this.isFrieze = false;
    // this.isFriezeTwo = false;

    if (this.customImagesActive) {
      this.patternOne = this.customImagesLoaded[0];
      this.patternTwo = this.customImagesLoaded[1];
      this.patternThree = this.customImagesLoaded[2];
      this.patternFour = this.customImagesLoaded[3];
      this.patternFive = this.customImagesLoaded[4];
      this.patternSix = this.customImagesLoaded[5];
    }

    if (recurseStep === undefined) {
      this.transWithRecurse = this.utilities.randomlyChooseTrueOrFalse();
      this.offset_x = Math.random() * 50 - 50;
      this.offset_y = Math.random() * 50 - 50;
      this.genType = this.genTypeArr[
        Math.floor(Math.random() * this.genTypeArr.length)
      ];
      this.singleLayer = true;
      this.wasRecurse = this.recurse;

      // if no recurse, this means t his is a new piece, not just a layer, so clear and calculate recurse chance
      this.clearCanvas();

      this.recurse = dark
        ? false
        : this.utilities.randomlyChooseTrueOrFalseLessHalf();

      this.ctx.scale(this.restoreScale, this.restoreScale);
      this.ctxTwo.scale(this.restoreScale, this.restoreScale);

      if (this.recurse) {
        this.ctx.scale(0.5175, 0.5175);
        this.ctxTwo.scale(0.5175, 0.5175);
        this.restoreScale = 1.932367149758454;
      } else {
        this.ctx.scale(0.625, 0.625);
        this.ctxTwo.scale(0.625, 0.625);
        this.restoreScale = 1.6;
      }

      this.fullCanvasSize = this.ctx.canvas.width * this.restoreScale;

      if (!this.recurse) {
        this.forceTrapezoidBeginPath = this.utilities.randomlyChooseTrueOrFalse();
        this.clearCanvas();

        // if (
        //   this.genType === "noPattern" ||
        //   (this.genType === "transPattern" && this.singleLayer)
        // ) {
        //   this.isTrunks = this.utilities.randomlyChooseTrueOrFalseThird();
        //   if (!this.isTrunks) {
        //     if (this.utilities.randomlyChooseTrueOrFalseThird) {
        //       this.isArabesque = false;
        //       this.isFrieze = true;
        //       this.isFriezeTwo = false;
        //       this.isMexico = false;
        //       if (this.utilities.randomlyChooseTrueOrFalseThird) {
        //         this.isFriezeTwo = true;
        //         this.isFrieze = false;
        //       }
        //     } else {
        //       this.isFrieze = false;
        //       this.isFriezeTwo = false;
        //       this.isArabesque = true;
        //       this.isMexico = false;
        //       if (this.utilities.randomlyChooseTrueOrFalseThird) {
        //         this.isFriezeTwo = true;
        //         this.isArabesque = false;
        //       }
        //     }
        //   } else {
        //     this.isArabesque = false;
        //     this.isFrieze = false;
        //     this.isFriezeTwo = false;
        //     this.isMexico = false;
        //   }
        //   this.isArabesque = false;
        //   this.isFrieze = false;
        //   this.isFriezeTwo = false;
        //   this.isMexico = false;
        //   this.isTrunks = false;
        //   const solidSwitch = Math.floor(Math.random() * 7) + 1;
        //   if (solidSwitch === 1) {
        //     this.isArabesque = true;
        //   } else if (solidSwitch === 2) {
        //     this.isArabesque = true;
        //   } else if (solidSwitch === 3) {
        //     this.isTrunks = false;
        //   } else if (solidSwitch === 4) {
        //     this.isFrieze = true;
        //   } else if (solidSwitch === 5) {
        //     this.isFrieze = true;
        //   } else if (solidSwitch === 6) {
        //     this.isFriezeTwo = true;
        //   } else {
        //     this.isMexico = true;
        //   }
        // }

        if (!this.customImagesActive && this.darkDatabaseList.length >= 6) {
          const maxDarkIndex = this.darkDatabaseList.length - 1;
          var one = Math.floor(Math.random() * maxDarkIndex);
          var two = Math.floor(Math.random() * maxDarkIndex);
          var three = Math.floor(Math.random() * maxDarkIndex);
          var four = Math.floor(Math.random() * maxDarkIndex);
          var five = Math.floor(Math.random() * maxDarkIndex);
          var six = Math.floor(Math.random() * maxDarkIndex);

          this.patternOne = this.darkDatabaseList[two];
          this.patternTwo = this.darkDatabaseList[five];
          this.patternThree = this.darkDatabaseList[three];
          this.patternFour = this.darkDatabaseList[four];
          this.patternFive = this.darkDatabaseList[six];
          this.patternSix = this.darkDatabaseList[one];

          if (this.wasRecurse) {
            const maxRegIndex = this.patternDatabaseList.length - 1;
            var oneReg = Math.floor(Math.random() * maxRegIndex);
            var twoReg = Math.floor(Math.random() * maxRegIndex);
            var threeReg = Math.floor(Math.random() * maxRegIndex);
            this.patternOne = this.patternDatabaseList[oneReg];
            this.patternTwo = this.patternDatabaseList[twoReg];
            this.patternFive = this.patternDatabaseList[threeReg];
          }
        }
        await this.getRandomArtAlg(clear, recurseStep);
        return;
      }
    } else {
      this.recurse = true;
    }

    // if (
    //   this.genType === "noPattern" ||
    //   (this.genType === "transPattern" && this.singleLayer)
    // ) {
    //   this.isTrunks = this.utilities.randomlyChooseTrueOrFalseThird();
    //   if (!this.isTrunks) {
    //     if (this.utilities.randomlyChooseTrueOrFalseThird) {
    //       this.isArabesque = false;
    //       this.isFrieze = true;
    //       this.isFriezeTwo = false;
    //       this.isMexico = false;
    //       if (this.utilities.randomlyChooseTrueOrFalseThird) {
    //         this.isFriezeTwo = true;
    //         this.isFrieze = false;
    //       }
    //     } else {
    //       this.isFrieze = false;
    //       this.isFriezeTwo = false;
    //       this.isArabesque = true;
    //       this.isMexico = false;
    //       if (this.utilities.randomlyChooseTrueOrFalseThird) {
    //         this.isFriezeTwo = true;
    //         this.isArabesque = false;
    //       }
    //     }
    //   } else {
    //     this.isArabesque = false;
    //     this.isFrieze = false;
    //     this.isFriezeTwo = false;
    //     this.isMexico = false;
    //   }
    //   this.isArabesque = false;
    //   this.isFrieze = false;
    //   this.isFriezeTwo = false;
    //   this.isMexico = false;
    //   this.isTrunks = false;
    //   const solidSwitch = Math.floor(Math.random() * 7) + 1;
    //   if (solidSwitch === 1) {
    //     this.isArabesque = true;
    //   } else if (solidSwitch === 2) {
    //     this.isArabesque = true;
    //   } else if (solidSwitch === 3) {
    //     this.isTrunks = false;
    //   } else if (solidSwitch === 4) {
    //     this.isFrieze = true;
    //   } else if (solidSwitch === 5) {
    //     this.isFrieze = true;
    //   } else if (solidSwitch === 6) {
    //     this.isFriezeTwo = true;
    //   } else {
    //     this.isMexico = true;
    //   }
    // }
    // because it's fast - we only care about making the load if it's new AND layers
    if (this.recurse && recurseStep === undefined) {
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

          this.patternFour = darkThree;
          const darkFive = this.patternDatabaseList[five];
          this.patternFive = darkFive;
          this.patternSix = darkFive;
        }
      }

      recurseStep = Math.floor(Math.random() * 5) + 4;
      this.startingRecurseStep = recurseStep;
      var img = new Image();
      img.src = this.canvas.toDataURL();
      img.onload = async function () {
        this.ctx.drawImage(
          img,
          0,
          0,
          this.fullCanvasSize,
          this.fullCanvasSize,
          0,
          0,
          this.fullCanvasSize,
          this.fullCanvasSize
        );
        await this.getRandomArtAlg(clear, recurseStep);
      }.bind(this);
    } else {
      await this.getRandomArtAlg(clear, recurseStep);
    }
  }

  async getRandomArtAlg(clear, recurseStep) {
    // first layer of small objects;
    this.resetForNewLayer();
    await this.getFirstSmallLayer();
    this.resetForNewLayer();
    // layer of transparent objects
    await this.getTransLayer(recurseStep);
    this.resetForNewLayer();
    // layer of main shapes
    if (recurseStep !== undefined) {
      await this.getMainLayer(recurseStep);
    } else {
      await this.getMainLayer();
    }

    this.resetForNewLayer();
    await this.getSecondSmallLayer();
    this.resetForNewLayer();

    if (this.singleLayer) {
      this.forceBeginPath = true;
      await this.getFirstSmallLayer(true);
      this.forceBeginPath = false;
      this.resetForNewLayer();
    }

    if (this.recurse && recurseStep && recurseStep > 1) {
      recurseStep--;
      await this.getRandomArt(clear, recurseStep);
    } else {
      this.saveCurrentArt(clear);
    }
  }

  async getSecondSmallLayer() {
    let count = 45;
    if (this.singleLayer) {
      count = 60;
    }

    while (this.layerCounter <= count) {
      let light = true;
      if (!this.recurse) {
        light = this.utilities.randomlyChooseTrueOrFalse();
      }
      this.randomColor = await this.getRandomRgb(false, light);
      this.randomStrokeOpacity = Math.random() * 1;
      this.randomShapeOpacity = Math.random() * 0.5;
      // checking if is dark
      if (
        !this.recurse &&
        this.randomColor.r + this.randomColor.g + this.randomColor.b < 220
      ) {
        this.randomShapeOpacity = Math.random() * 0.4;
      }
      const randomShape = this.smallShapeArr[
        Math.floor(Math.random() * this.shapeArr.length)
      ];
      const stroke = await this.getRandomRgb(true);
      this.ctx.strokeStyle =
        "rgb(" + stroke["r"] + "," + stroke["g"] + "," + stroke["b"] + ", 1)";

      if (this.utilities.randomlyChooseTrueOrFalse() && this.recurse) {
        this.ctx.strokeStyle = "black";
      }
      this.randomColor =
        "rgb(" +
        this.randomColor["r"] +
        "," +
        this.randomColor["g"] +
        "," +
        this.randomColor["b"] +
        "," +
        this.randomShapeOpacity +
        ")";
      this.ctx.fillStyle = this.randomColor;
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();

      if (this.recurse) {
        this.patternFill = true;
      }

      this.ctx.lineWidth = Math.random() * 10;

      if (this.singleLayer) {
        this.ctx.lineWidth = Math.random() * 3.2;
        if (!this.recurse) {
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
      await this.drawShape(randomShape, true, false, false, true);
      this.layerCounter++;
    }
  }

  async getFirstSmallLayer(smallCount?: boolean) {
    let smallCounter = 25;
    if (this.singleLayer) {
      smallCounter = 100;
      if (smallCount) {
        smallCounter = 45;
      }
    }
    while (this.layerCounter <= smallCounter) {
      this.randomColor = this.colorArr[
        Math.floor(Math.random() * this.colorArr.length)
      ];
      this.randomStrokeOpacity = Math.random();
      this.randomShapeOpacity = Math.random();
      const randomShape = this.smallShapeArr[
        Math.floor(Math.random() * this.shapeArr.length)
      ];
      const stroke = await this.getRandomRgb();
      this.ctx.strokeStyle =
        "rgb(" + stroke["r"] + "," + stroke["g"] + "," + stroke["b"] + ", 1)";
      this.ctx.globalAlpha = 1;
      this.randomColor =
        this.randomColor.substring(0, this.randomColor.length - 1) +
        "," +
        this.randomShapeOpacity +
        ")";
      this.ctx.fillStyle = this.randomColor;
      this.ctx.lineWidth = Math.random() * 10;
      this.patternFill = this.utilities.randomlyChooseTrueOrFalse();
      let randNum = Math.floor(Math.random() * 2) + 1;
      if (randNum === 1) {
        this.ctx.globalAlpha = this.randomShapeOpacity;
      }
      if (
        randNum !== 1 &&
        smallCount &&
        !this.forceBeginPath &&
        !this.patternFill
      ) {
        this.randomShapeOpacity = Math.random() * 0.5;
        this.randomColor =
          this.randomColor.substring(0, this.randomColor.length - 1) +
          "," +
          this.randomShapeOpacity +
          ")";
        this.ctx.fillStyle = this.randomColor;
      }

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
    this.shapeArr = ["Rectangle", "Triangle", "Circle", "Line"];
  }

  async getTransLayer(recurseStep) {
    let layerNum = 30;
    let rand;
    this.backgroundShapeArr = ["Rectangle", "Circle", "Line"];
    while (this.layerCounter < layerNum) {
      this.randomColor = await this.getRandomRgb();
      this.randomColor =
        "rgb(" +
        this.randomColor["r"] +
        "," +
        this.randomColor["g"] +
        "," +
        this.randomColor["b"] +
        ")";
      this.randomStrokeOpacity = Math.random();
      this.randomShapeOpacity = Math.random();
      var randomShape = this.backgroundShapeArr[
        Math.floor(Math.random() * this.shapeArr.length)
      ];
      var stroke = await this.getRandomRgb();
      this.ctx.strokeStyle =
        "rgb(" + stroke["r"] + "," + stroke["g"] + "," + stroke["b"] + ")";
      rand = this.utilities.randomlyChooseOneOrTwo();
      if (rand === 1) {
        this.ctx.strokeStyle = "black";
      }

      this.randomColor =
        this.randomColor.substring(0, this.randomColor.length - 1) +
        "," +
        this.randomShapeOpacity +
        ")";

      this.ctx.globalAlpha = 0.4 - (layerNum / this.layerCounter) * 0.01;
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
      const transPattern =
        recurseStep === this.startingRecurseStep &&
        this.recurse &&
        this.transWithRecurse &&
        this.utilities.randomlyChooseTrueOrFalse()
          ? true
          : false;
      await this.drawShape(randomShape, false, false, transPattern);
      this.layerCounter++;
    }
  }

  async getMainLayer(recurseStep?) {
    this.shapeArr = ["Rectangle", "Triangle", "Line"];
    this.patternFill = true;
    this.shapeArr = ["Trapezoid", "Line"];

    let objNum = Math.floor(Math.random() * 1) + 5;

    if (this.singleLayer) {
      objNum = 6;
      // this.isTrunks = this.utilities.randomlyChooseTrueOrFalse();
      // if (this.isTrunks) {
      //   this.isArabesque = false;
      //   this.isFrieze = false;
      //   this.isFriezeTwo = false;
      //   this.isMexico = this.utilities.randomlyChooseTrueOrFalse();
      //   if (this.isMexico) {
      //     this.isTrunks = false;
      //   }
      // }
    }

    while (this.layerCounter < objNum) {
      this.randomColor = await this.getRandomRgb(false, true);
      this.randomColor =
        "rgb(" +
        this.randomColor["r"] +
        "," +
        this.randomColor["g"] +
        "," +
        this.randomColor["b"] +
        ")";
      this.randomShapeOpacity = Math.random();

      if (this.layerCounter === objNum) {
        this.randomShapeOpacity = 0;
      }

      if (!this.recurse && this.layerCounter === objNum - 1) {
        this.randomShapeOpacity = 0.1;
      }
      if (this.singleLayer && this.recurse) {
        this.ctx.globalAlpha = this.layerCounter / objNum + 0.2;
      } else {
        this.ctx.globalAlpha = this.layerCounter / objNum + 0.1;
      }

      var randomShape = this.shapeArr[
        Math.floor(Math.random() * this.shapeArr.length)
      ];

      let rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 1) {
        this.ctx.strokeStyle = "black";
      } else {
        const dark = this.utilities.randomlyChooseOneOrTwo();
        var stroke = await this.getRandomRgb(false, false, dark);
        this.ctx.strokeStyle =
          "rgb(" + stroke["r"] + "," + stroke["g"] + "," + stroke["b"] + ")";
      }

      this.randomColor =
        this.randomColor.substring(0, this.randomColor.length - 1) +
        "," +
        this.randomShapeOpacity +
        ")";

      this.ctx.fillStyle = this.randomColor;
      // default is middle
      let newLineWidth = Math.random() * 5 + 1;
      if (
        this.layerCounter < objNum / 4 ||
        (this.layerCounter > objNum * 0.5 && this.layerCounter < objNum * 0.6)
      ) {
        newLineWidth = Math.random() * 20 + 16;

        if (this.layerCounter === objNum - 1 || this.layerCounter === objNum) {
          newLineWidth = Math.random() * 20 + 16;
          this.ctx.globalAlpha = 1;
        }
        if (this.layerCounter === objNum - 2) {
          newLineWidth = Math.random() * 20 + 16;
          this.ctx.globalAlpha = 1;
        }
        if (!this.singleLayer && recurseStep === 1) {
          if (this.layerCounter === objNum - 3) {
            newLineWidth = Math.random() * 20 + 16;
          }
        }
        if (recurseStep < 3) {
          this.ctx.globalAlpha = 1;
        }
      }

      if (this.singleLayer) {
        newLineWidth = Math.random() * 3.2;
        const rand = this.utilities.randomlyChooseTrueOrFalse();
        if (rand) {
          newLineWidth = Math.random() * 10;
        }
      }
      this.ctx.lineWidth = newLineWidth;

      await this.drawShape(randomShape, false, true);
      this.layerCounter++;
    }
  }

  onload2promise(obj): Promise<any> {
    return new Promise((resolve, reject) => {
      obj.onload = () => resolve(obj);
      obj.onerror = reject;
    });
  }

  async drawShape(shape, small?, main?, trans?, secondSmall?) {
    var xPos =
      Math.random() * this.canvasSize +
      (this.fullCanvasSize - this.canvasSize) / 2.5;
    var yPos =
      Math.random() * this.canvasSize +
      (this.fullCanvasSize - this.canvasSize) / 2.75;

    // small
    var height = (Math.random() * this.canvasSize) / 2;
    var width = (Math.random() * this.canvasSize) / 2;
    let currObjArea = height * width;

    this.patternSwitch = Math.floor(Math.random() * 8) + 1;

    if (this.recurse) {
      this.patternFill = true;
    } else {
      if (this.genType === "noPattern" && main) {
        this.patternFill = true;
      }
    }
    rand = this.utilities.randomlyChooseOneOrTwo();

    if (this.patternFill) {
      if (this.patternSwitch === 1) {
        await this.loadAndSetImage(this.patternThree);
      } else if (this.patternSwitch === 2) {
        if (rand === 1) {
          await this.loadAndSetImage(this.patternTwo);
        } else if (rand === 2) {
          await this.loadAndSetImage(this.patternFour);
        }
      } else if (this.patternSwitch === 3) {
        await this.loadAndSetImage(this.patternSix);
      } else if (this.patternSwitch === 4) {
        if (rand === 1) {
          await this.loadAndSetImage(this.patternFour);
        } else if (rand === 2) {
          await this.loadAndSetImage(this.patternSix);
        }
      } else if (this.patternSwitch === 5) {
        await this.loadAndSetImage(this.patternTwo);
      } else if (this.patternSwitch === 6) {
        await this.loadAndSetImage(this.patternOne);
      } else if (this.patternSwitch === 7) {
        await this.loadAndSetImage(this.patternFive);
      } else {
        await this.loadAndSetImage(this.patternFour);
      }
      // if (this.isFrieze && main) {
      //   await this.loadAndSetImage(this.patternThree);
      // }
      // if (this.isFriezeTwo && main) {
      //   await this.loadAndSetImage(this.patternFive);
      // }
      // if (this.isTrunks && main) {
      //   await this.loadAndSetImage(this.patternSix);
      // }

      // if (this.isArabesque && main) {
      //   await this.loadAndSetImage(this.patternOne);
      // }

      // if (this.isMexico && main) {
      //   await this.loadAndSetImage(this.patternFour);
      // }
    }

    if (trans && this.transDatabaseList.length > 1) {
      const transIndex = Math.floor(
        Math.random() * (this.transDatabaseList.length - 1)
      );
      this.currentImage = this.transDatabaseList[transIndex];
      await this.loadAndSetImage(this.currentImage);
    }

    if (
      small ||
      this.aggrObjArea + currObjArea + 250 >= Math.pow(this.canvasSize, 2)
    ) {
      height = (Math.random() * this.canvasSize) / 25;
      width = (Math.random() * this.canvasSize) / 25;
      currObjArea = height * width;
    }

    switch (shape) {
      case "Rectangle":
        if (
          xPos + width + this.offset_x + this.ctx.lineWidth >
          this.fullCanvasSize
        ) {
          width =
            this.fullCanvasSize - xPos - this.offset_x - this.ctx.lineWidth - 2;
        }
        if (
          yPos + height + this.offset_y + this.ctx.lineWidth >
          this.fullCanvasSize
        ) {
          height =
            this.fullCanvasSize -
            yPos -
            this.offset_y -
            this.ctx.lineWidth -
            10;
        }
        this.ctx.fillRect(xPos, yPos, width, height);
        this.ctx.strokeRect(xPos, yPos, width, height);
        break;
      case "Trapezoid":
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

        let rand1 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        let y1 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;

        if (y1 > this.fullCanvasSize + this.offset_y + this.ctx.lineWidth) {
          y1 = this.fullCanvasSize - this.offset_y - this.ctx.lineWidth - 5;
        }

        //first point
        this.ctx.moveTo(rand1, y1);
        let rand2 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        //second point completes first side
        let y2 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        if (y2 > this.fullCanvasSize) {
          y2 = this.fullCanvasSize - 10;
        }
        this.ctx.lineTo(rand2, y2);

        let rand3 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        let y3 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        if (y3 > this.fullCanvasSize) {
          y3 = this.fullCanvasSize - 10;
        }

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
        let y4 = heightLow - Math.random() * (heightLow - heightHigh);

        if (rand1 === leftMost && y1 === heightHigh && rand4 < rand2) {
          y4 = y1 + Math.random() * this.canvasSize;
        }

        if (y4 > this.fullCanvasSize) {
          y4 = this.fullCanvasSize - 10;
        }

        this.ctx.lineTo(rand4, y4);
        this.ctx.fill();
        this.ctx.lineTo(rand1, y1);
        this.ctx.stroke();
        currObjArea = this.calcPolygonArea([
          { x: rand1, y: y1 },
          { x: rand2, y: rand1 },
          { x: rand3, y: rand2 },
          { x: rand4, y: y2 },
        ]);
        break;
      case "Triangle":
        if (!this.forceBeginPath && this.singleLayer) {
          if (!this.forceTrapezoidBeginPath) {
            this.ctx.beginPath();
          }
        } else {
          this.ctx.beginPath();
        }

        rand1 = xPos;
        rand2 = yPos;
        let ty1 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        let ty2 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;

        // vertex one
        if (ty1 > this.fullCanvasSize + this.ctx.lineWidth + this.offset_y) {
          ty1 = this.fullCanvasSize - this.offset_y - this.ctx.lineWidth - 5;
        }
        this.ctx.moveTo(rand1, ty1);

        // vertex two
        this.ctx.lineTo(rand2, rand1);
        // this.ctx.stroke();
        if (rand1 > this.fullCanvasSize) {
          rand1 = this.fullCanvasSize - 10;
        }

        if (ty2 > this.fullCanvasSize + this.ctx.lineWidth + this.offset_y) {
          ty2 = this.fullCanvasSize - this.ctx.lineWidth - this.offset_y - 5;
        }
        // vertex three
        this.ctx.lineTo(rand2, ty2);

        this.ctx.stroke();

        this.ctx.lineTo(rand1, ty1);

        this.ctx.fill();
        currObjArea = this.calcPolygonArea([
          { x: rand1, y: ty1 },
          { x: rand2, y: rand1 },
          { x: rand2, y: ty2 },
        ]);
        break;
      case "Line":
        // this.ctx.beginPath();
        rand1 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        var rand = Math.floor(Math.random() * 2) + 1;
        if (rand === 1) {
          rand2 = rand1 + 15;
        } else {
          rand2 = rand1 - 15;
        }
        let ly1 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;
        let ly2 =
          Math.random() * this.canvasSize +
          (this.fullCanvasSize - this.canvasSize) / 2;

        this.ctx.moveTo(rand1, ly1);
        this.ctx.lineTo(rand2, rand1);
        this.ctx.lineTo(rand2, ly2);
        this.ctx.stroke();
        // pythagorean theorem
        currObjArea =
          this.ctx.lineWidth *
          (this.getDistance(rand1, ly1, rand2, rand1) +
            this.getDistance(rand2, rand1, rand2, ly2));
        break;
      case "Circle":
        // var radius = width / 2;
        // if (!this.recurse || (!this.forceBeginPath && this.singleLayer)) {
        //   if (secondSmall) {
        //     this.ctx.beginPath();
        //   }
        // } else {
        //   this.ctx.beginPath();
        // }
        var radius = width / 2;
        if (!this.forceBeginPath && this.singleLayer) {
        } else {
          this.ctx.beginPath();
        }

        if (xPos - radius + this.offset_x - this.ctx.lineWidth < 0) {
          if (this.offset_x < 0) {
            xPos = radius - this.offset_x + this.ctx.lineWidth + 5;
          } else {
            xPos = radius + this.ctx.lineWidth + 5;
          }
        }
        if (yPos - radius + this.offset_y - this.ctx.lineWidth < 0) {
          if (this.offset_y < 0) {
            yPos = radius - this.offset_y + this.ctx.lineWidth + 5;
          } else {
            yPos = radius + this.ctx.lineWidth + 5;
          }
        }
        this.ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();
        this.ctx.stroke();

        currObjArea = Math.PI * Math.pow(radius, 2);
        // get better with calculating for circles
        break;
    }

    this.aggrObjArea += currObjArea;
  }

  async loadAndSetImage(pattern) {
    // this.currentImage = this.patternThree;
    const repeat = this.utilities.randomlyChooseTrueOrFalse()
      ? "no-repeat"
      : "repeat";

    this.currentImage = pattern;
    if (!this.currentImage.complete) {
      await this.onload2promise(this.currentImage);
    }
    this.ctx.fillStyle = this.ctx.createPattern(pattern, repeat);
  }

  renderImage(index?: number, favorites?: boolean) {
    if (index !== undefined) {
      this.currImageIndex = index;
    }
    var img = new Image();
    let imageArr = favorites ? this.favoritesArr : this.savedImageArr;
    img.src = imageArr[this.currImageIndex]
      ? imageArr[this.currImageIndex].src
      : this.canvas.toDataURL();

    this.ctxTwo.save();
    this.ctxTwo.scale(this.restoreScale, this.restoreScale);

    img.onload = function () {
      this.ctx.drawImage(
        img,
        0,
        0,
        this.canvasSize,
        this.canvasSize,
        0,
        0,
        this.canvasSize,
        this.canvasSize
      );
      this.drawImageScaled(img, this.ctxTwo);

      this.ctxTwo.restore();

      this.renderDone = true;
      this.renderDoneEmit.emit(true);
      this.loader.nativeElement.style.visibility = "hidden";
      if (index === undefined) {
        this.updateCurrentIndex.emit(this.savedImageArr.length - 1);
      }
      console.log(
        "this.gentype",
        this.genType,
        "is single layer",
        this.singleLayer
      );
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
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  saveCurrentArt(isNew?: boolean, source?: string) {
    let newSource = this.canvas.toDataURL();
    if (source) {
      newSource = source;
    }
    const imgObj = {
      name: this.savedImageArr.length + "index",
      src: newSource,
      favorite: false,
    };

    this.savedImageArr.push(imgObj);

    this.currImageIndex = this.savedImageArr.length - 1;
    this.saveImageFirebase.emit(imgObj);

    this.loader.nativeElement.style.visibility = "hidden";
    this.renderImage();
  }

  setCustomImages(clear) {
    this.patternOne.src = this.customImages[0].src;
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
          const pattern = this.ctx.createPattern(
            this.patternThree,
            this.repeat
          );
          this.ctx.fillStyle = pattern;
          this.customImages[2].ready = true;
          this.customImagesLoaded.push(this.patternThree);

          this.patternFour.src = this.customImages[3].src;
          this.patternFour.onload = function () {
            const pattern = this.ctx.createPattern(
              this.patternFour,
              this.repeat
            );
            this.ctx.fillStyle = pattern;
            this.customImages[3].ready = true;
            this.customImagesLoaded.push(this.patternFour);
            this.patternFive.src = this.customImages[4].src;
            this.patternFive.onload = function () {
              const pattern = this.ctx.createPattern(
                this.patternFive,
                this.repeat
              );
              this.ctx.fillStyle = pattern;
              this.customImages[4].ready = true;
              this.customImagesLoaded.push(this.patternFive);
              this.patternSix.src = this.customImages[5].src;
              this.patternSix.onload = async function () {
                const pattern = this.ctx.createPattern(
                  this.patternSix,
                  this.repeat
                );
                this.ctx.fillStyle = pattern;
                this.customImages[5].ready = true;
                this.customImagesLoaded.push(this.patternSix);
                await this.getRandomArt(clear);
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

      total += addX * addY * 0.5;
      total -= subX * subY * 0.5;
    }

    return Math.abs(total);
  }

  //BBOOK WUZ HERE
  async getRandomColorArr() {
    var tempRgb = await this.getRandomRgb();
    var complementaryColorArr = [
      "rgb(" + tempRgb.r + "," + tempRgb.g + "," + tempRgb.b + ")",
    ];
    var currRgb = tempRgb;

    for (var i = 0; i < 6; i++) {
      currRgb = await this.getRandomRgb();
      complementaryColorArr.push(
        "rgb(" + currRgb.r + "," + currRgb.g + "," + currRgb.b + ")"
      );
    }

    return complementaryColorArr;
  }

  async setLastImageColor() {
    const fac = new FastAverageColor();
    this.lastImageColor = await fac.getColorAsync(this.currentImage);
  }

  async getRandomRgb(isSecondSmallLayer?, light?, dark?) {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = (num >> 8) & 255;
    var b = num & 255;

    if (isSecondSmallLayer) {
      await this.setLastImageColor();
      if (
        this.lastImageColor.r + this.lastImageColor.g + this.lastImageColor.b <
        400
      ) {
        while (r + g + b < 620) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      } else {
        while (r + g + b > 120) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      }
    } else {
      if (this.utilities.randomlyChooseTrueOrFalseThirdReal() && !light) {
        while (r + g + b < 620) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      } else {
        while (r + g + b < 620 && (r + g + b > 220 || r + g + b < 120)) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      }
      if (light) {
        while (r + g + b < 620) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      }

      if (dark) {
        while (r + g + b > 220 || r + g + b < 120) {
          num = Math.round(0xffffff * Math.random());
          r = num >> 16;
          g = (num >> 8) & 255;
          b = num & 255;
        }
      }
    }

    const retVal = { r: r, g: g, b: b };
    return retVal;
  }
}

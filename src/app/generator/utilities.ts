export class Utilities {
  getGuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  byteCount(s) {
    return encodeURI(s).split(/%..|./).length - 1;
  }
  randomlyChooseOneOrTwo() {
    const num = Math.random() + 1;
    if (num < 1.5) {
      return 1;
    } else {
      return 2;
    }
  }

  randomlyChooseTrueOrFalse() {
    const num = Math.random() + 1;
    if (num < 1.5) {
      return false;
    } else {
      return true;
    }
  }

  randomlyChooseTrueOrFalseLessHalf() {
    const num = Math.random() * 3;
    if (num < 1.75) {
      return false;
    } else {
      return true;
    }
  }

  randomlyChooseTrueOrFalseThird() {
    const num = Math.random() + 3;
    if (num < 1.5) {
      return true;
    } else {
      return false;
    }
  }   
  randomlyChooseTrueOrFalseThirdReal() {
    const num = Math.random() * 3;
    if (num <= 2) {
      return true;
    } else {
      return false;
    }
  }   
  randomlyChooseTrueOrFalseSpecial() {
    const num = Math.random() * 3;
    if (num <= 1.77) {
      return true;
    } else {
      return false;
    }
  }   

  randomlyChooseTrueOrFalse10Real() {
    const num = Math.random() * 10;
    if (num < 5) {
      return true;
    } else {
      return false;
    }
  }   


  randomlyChooseTrueOrFalseQuarter() {
    const num = Math.random() * 4;
    if (num < 3) {
      return 'repeat';
    } else {
      return 'no-repeat';
    }
  }  
}

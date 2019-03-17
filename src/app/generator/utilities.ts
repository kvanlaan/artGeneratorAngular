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

  randomlyChooseTrueOrFalseThird() {
    const num = Math.random() + 3;
    if (num < 1.5) {
      return true;
    } else {
      return false;
    }
  }   
}

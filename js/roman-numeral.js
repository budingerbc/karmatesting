function RomanNumeral(number) {
  this.number = number;
}

RomanNumeral.prototype.zeroType = function(scope) {
  return "";
};

RomanNumeral.prototype.oneFiveType = function(numberScope, currentNum) {
  var buildRoman1to5 = "";
  if (currentNum <= 3) {
    for (i = 0; i < currentNum; i++) {
      buildRoman1to5 += numberScope[0];
    }
  }
  else {
    if (currentNum === 4) {
      buildRoman1to5 += numberScope[0];
    }
    buildRoman1to5 += numberScope[1];
  }
  return buildRoman1to5;
};

RomanNumeral.prototype.sixNineType = function(numberScope, currentNum) {
  var buildRoman6to9 = "";
  if (currentNum > 5 && currentNum <= 8) {
    buildRoman6to9 += numberScope[1];
    for (i = currentNum; i > 5; i--) {
      buildRoman6to9 += numberScope[0];
    }
  }
  else {
    if (currentNum === 9) {
      buildRoman6to9 += numberScope[0];
    }
    buildRoman6to9 += numberScope[2];
  }
  return buildRoman6to9;
};

RomanNumeral.prototype.generateRoman = function(numberScope, currentNum) {
  currentNum = parseInt(currentNum);
  var buildRomanNumeral = "";
  if (currentNum === 0) {
    buildRomanNumeral += this.zeroType(numberScope);
  }
  else if (currentNum > 0 && currentNum <= 5) {
    buildRomanNumeral += this.oneFiveType(numberScope, currentNum);
  }
  else {
    buildRomanNumeral += this.sixNineType(numberScope, currentNum);
  }
  return buildRomanNumeral;
};

RomanNumeral.prototype.findLastNumber = function(number) {
  digits = number.length;
  return parseInt(number[digits - 1]);
};

RomanNumeral.prototype.findScope = function(pointer) {
  // alpha is 1s digit; beta is 5s digit; gamma is 10s digit
  var scopeArray = [];

  if (pointer === 1) {
    scopeArray = ["I", "V", "X"];
  }
  else if (pointer === 2) {
    scopeArray = ["X", "L", "C"];
  }
  else if (pointer === 3) {
    scopeArray = ["C", "D", "M"];
  }
  else if (pointer === 4) {
    scopeArray = ["M"];
  }
  else {
    return [0, 0, 0];
  }
  return scopeArray;
};

RomanNumeral.prototype.findPointerNumber = function(pointer, number) {
  return parseInt(number[pointer]);
};

RomanNumeral.prototype.lengthOfArray = function(array) {
  return array.length;
};

RomanNumeral.prototype.arrayOfNumbers = function(number) {
  number = number.toString();
  return number.split("");
};

RomanNumeral.prototype.arabicToRoman = function() {
  var numberArray = this.arrayOfNumbers(this.number);
  var arrayLength = this.lengthOfArray(numberArray);
  var buildRoman = "";

  for (var j = arrayLength; j > 0; j--) {
    var k = arrayLength - j;
    var currentNumber = this.findPointerNumber(k, numberArray);
    currentNumber = parseInt(currentNumber);
    var numberScope = this.findScope(j);
    buildRoman += this.generateRoman(numberScope, currentNumber);
  }

  return buildRoman;
};

RomanNumeral.prototype.validateInput = function() {
  if (this.number > 0 && this.number < 4000) {
    return true;
  }
  else {
    return false;
  }
};

exports.romanNumeralModule = RomanNumeral;

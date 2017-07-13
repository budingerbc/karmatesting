var zeroType = function(scope) {
  return "";
};

var oneFiveType = function(numberScope, currentNum) {
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

var sixNineType = function(numberScope, currentNum) {
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

var generateRoman = function(numberScope, currentNum) {
  currentNum = parseInt(currentNum);
  var buildRomanNumeral = "";
  if (currentNum === 0) {
    buildRomanNumeral += zeroType(numberScope)
  }
  else if (currentNum > 0 && currentNum <= 5) {
    buildRomanNumeral += oneFiveType(numberScope, currentNum);
  }
  else {
    buildRomanNumeral += sixNineType(numberScope, currentNum);
  }
  return buildRomanNumeral;
};

var findLastNumber = function(number) {
  digits = number.length;
  return parseInt(number[digits - 1]);
};

var findScope = function(pointer) {
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

var findPointerNumber = function(pointer, number) {
  return parseInt(number[pointer])
};

var lengthOfArray = function(array) {
  return array.length;
};

var arrayOfNumbers = function(number) {
  return number.split("");
};

var arabicToRoman = function(number) {
  var numberArray = arrayOfNumbers(number);
  var arrayLength = lengthOfArray(numberArray);
  var buildRoman = "";

  for (var j = arrayLength; j > 0; j--) {
    var k = arrayLength - j;
    var currentNumber = findPointerNumber(k, numberArray);
    currentNumber = parseInt(currentNumber);
    var numberScope = findScope(j);
    buildRoman += generateRoman(numberScope, currentNumber);
  }

  return buildRoman;
};

var validateInput = function(input) {
  if (input > 0 && input < 4000) {
    return true;
  }
  else {
    return false;
  }
};

// Main method calls Roman Numeral Generator and outputs result.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var arabic = $("#arabicNumeral").val();
    var outputRoman;

    if (validateInput(arabic)) {
      outputRoman = arabicToRoman(arabic);
    }
    else {
      outputRoman = "Not Valid Input."
    }

    $("#output").text(outputRoman);
  });
});

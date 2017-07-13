// var oneThroughFive = function(number) {
//   var buildRoman1to5 = "";
//   if (number <= 3) {
//     for (i = 0; i < number; i++) {
//       buildRoman1to5 += "I";
//     }
//   }
//   else {
//     if (number === 4) {
//       buildRoman1to5 += "I";
//     }
//     buildRoman1to5 += "V";
//   }
//   return buildRoman1to5;
// };
//
// var sixThroughNine = function(number) {
//   var buildRoman6to9 = "";
//   if (number > 5 && number <= 8) {
//     buildRoman6to9 += "V";
//     for (i = number; i > 5; i--) {
//       buildRoman6to9 += "I";
//     }
//   }
//   else {
//     if (number === 9) {
//       buildRoman6to9 += "I";
//     }
//     buildRoman6to9 += "X";
//   }
//   return buildRoman6to9;
// };

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
  buildRomanNumeral = "";
  if (currentNum > 0 && currentNum <= 5) {
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

  if (pointer === 0) {
    scopeArray[0] = "I";
    scopeArray[1] = "V";
    scopeArray[2] = "X";
  }
  else if (pointer === 1) {
    scopeArray[0] = "X";
    scopeArray[1] = "L";
    scopeArray[2] = "C";
  }
  else if (pointer === 3) {
    scopeArray[0] = "C";
    scopeArray[1] = "D";
    scopeArray[2] = "M";
  }
  else {
    console.log("This is an error");
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
  var lastNumber = findLastNumber(numberArray);
  var buildRoman = "";

  // if (lastNumber > 0 && lastNumber <= 5) {
  //   buildRoman += oneThroughFive(lastNumber);
  // }
  // else {
  //   buildRoman += sixThroughNine(lastNumber);
  // }

  for (j = arrayLength; j > 0; j--) {
    var k = arrayLength - j;
    var currentNumber = findPointerNumber(k, numberArray);

    var numberScope = findScope(j);
    buildRoman = generateRoman(numberScope, currentNumber);
  }

  return buildRoman;
};

// Main method calls Roman Numeral Generator and outputs result.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var arabic = $("#arabicNumeral").val();
    var outputRoman = arabicToRoman(arabic);

    $("#output").text(outputRoman);
  });
});

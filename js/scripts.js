var oneThroughFive = function(number) {
  var buildRoman1to5 = "";
  if (number <= 3) {
    for (i = 0; i < number; i++) {
      buildRoman1to5 += "I";
    }
  }
  else {
    if (number === 4) {
      buildRoman1to5 += "I";
    }
    buildRoman1to5 += "V";
  }
  return buildRoman1to5;
};

var sixThroughNine = function(number) {
  var buildRoman6to9 = "";
  if (number > 5 && number <= 8) {
    buildRoman6to9 += "V";
    for (i = number; i > 5; i--) {
      buildRoman6to9 += "I";
    }
  }
  else {
    if (number === 9) {
      buildRoman6to9 += "I";
    }
    buildRoman6to9 += "X";
  }
  return buildRoman6to9;
};

var findLastNumber = function(number) {
  digits = number.length;
  return parseInt(number[digits - 1]);
};

var arrayOfNumbers = function(number) {
  return number.split("");
};

var arabicToRoman = function(number) {
  var numberArray = arrayOfNumbers(number);
  var lastNumber = findLastNumber(numberArray);
  console.log(lastNumber);

  var buildRoman = "";

  if (lastNumber > 0 && lastNumber <= 5) {
    buildRoman += oneThroughFive(lastNumber);
  }
  else {
    buildRoman += sixThroughNine(lastNumber);
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

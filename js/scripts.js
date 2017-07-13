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

var sixThroughNine = function() {
  
};

var arabicToRoman = function(number) {
  var buildRoman = "";

  if (number > 0 && number <= 5) {
    buildRoman += oneThroughFive(number);
  }
  else {
    buildRoman += sixThroughNine(number);
  }
  return buildRoman;
};

// Main method calls Roman Numeral Generator and outputs result.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var arabic = parseInt($("#arabicNumeral").val());
    var outputRoman = arabicToRoman(arabic);

    $("#output").text(outputRoman);
  });
});

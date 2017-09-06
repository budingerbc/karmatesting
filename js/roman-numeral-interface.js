var RomanNumeral = require("./../js/roman-numeral.js").romanNumeralModule;

// Main method calls Roman Numeral Generator and outputs result.
$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var arabic = $("#arabicNumeral").val();
    var outputRoman;

    var newRomanNumeral = new RomanNumeral(arabic);

    if (newRomanNumeral.validateInput()) {
      outputRoman = newRomanNumeral.arabicToRoman();
    }
    else {
      outputRoman = "Not Valid Input.";
    }

    $("#output").text(outputRoman);
  });
});

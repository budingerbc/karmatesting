var RomanNumeral = require('./../js/roman-numeral.js').romanNumeralModule;

describe('RomanNumeral', function() {

  it('should determine if input is a valid number', function() {
    var romanNumeral = new RomanNumeral(-1);
    var romanNumeral2 = new RomanNumeral(1000);
    var romanNumeral3 = new RomanNumeral('abc');
    expect(romanNumeral.validateInput()).toEqual(false);
    expect(romanNumeral2.validateInput()).toEqual(true);
    expect(romanNumeral3.validateInput()).toEqual(false);
  });

  it('should test if input returns the correct roman numeral', function() {
    var romanNumeral1 = new RomanNumeral(7);
    var romanNumeral2 = new RomanNumeral(52);
    var romanNumeral3 = new RomanNumeral(174);
    expect(romanNumeral1.arabicToRoman()).toEqual("VII");
    expect(romanNumeral2.arabicToRoman()).toEqual("LII");
    expect(romanNumeral3.arabicToRoman()).toEqual("CLXXIV");
  });
});

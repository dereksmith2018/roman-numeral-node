export var Translation = function(number) {
  this.number = number;
  this.romanNumber = "";
};

Translation.prototype.translate = function() {
  var romanNumerals = {"M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
  var quotient = 0;
  for (var i of Object.keys(romanNumerals)){
    quotient = Math.floor(this.number / romanNumerals[i]);
    this.number -= quotient * romanNumerals[i];
    this.romanNumber+=i.repeat(quotient);
  }
  return  this.romanNumber;
};
const convertToCelsius = function(f) {
  return round((f-32)*5/9);
};

const convertToFahrenheit = function(c) {
  return round(c/5*9+32);
};

const round = function(n) {
  return Math.round(10*n)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

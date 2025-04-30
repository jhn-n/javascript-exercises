const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;	
};

const sum = function(args) {
	return args.reduce((s,a) => s+a,0);
};

const multiply = function(args) {
  return args.reduce((s,a) => s*a);

};

const power = function(base, exponent) {
  let ans = 1;
  for (let i=0; i<exponent; i++) {
    ans *= base;
  }
  return ans;
	
};

const factorial = function(n) {
  let ans = 1;
  for (let i=2; i<=n; i++) {
    ans *= i;
  }
  return ans;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

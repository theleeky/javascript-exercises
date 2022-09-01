const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let c = 0;
	return array.reduce((a,b) => a+b, c)
};

const multiply = function(array) {
  let c = 1;
	return array.reduce((a,b) => a*b, c)
};

const power = function(num1, num2) {
	return num1**num2;
};

const factorial = function(num){
  return factor(num);
}

function factor(num){
  if (num === 0){
    return 1;
  } else {
    return factor(num-1)*num;
  }
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

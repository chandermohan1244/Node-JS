//function expression
var counter=function(arr){
  return 'length of the array'+arr.length;
}

var multiplication=function(a,b) {
  return `the product of number is ${a*b}`
}
var addition=function(a,b) {
  return `the sum of no is ${a+b}`
}
var subtraction=function(a,b) {
  return `the subtraction of number is ${a-b}`
}
var divide=function(a,b) {
  return `the divide of no is ${a/b}`
}
var constant = 10;
//module.exports.counter = counter;
//module.exports.multiplication =multiplication;
//module.exports.constant=constant;
module.exports = {
  counter:counter,
  multiplication:multiplication,
  addition:addition,
  subtraction:subtraction,
  divide:divide,
  constant:constant
}

//console.log('hey this is my first node js application');
/*setTimeout(function(){
  console.log('this is after 2 sec');
},2000);*/
/*setInterval(function(){
  console.log('every 2 sec');
},2000);*/
/*var time=0;
var timer= setInterval(function(){
  time=time+2;
  console.log(time + 'has crossed');
  if(time>7){
    clearInterval(timer);
  }
},2000);*/

//console.log(__dirname);
//console.log(__filename);
/*function myfunction(){
  console.log('inside my function');
}*/

//function expression
/*var func=function(){
  console.log('My function expression');
}
func();
//in es6 function expression
var func = () => {
  console.log('My function expression');
}
func();
//////////// different ways to call function
function fun(func) {
  func();
}
fun(func);*/
/*-----------------------------------------------------------------------------------------------------------------------*/



var myModule=require('./myModule');
console.log(myModule.counter(['a','b','c']));
console.log(myModule.multiplication(3,5));
console.log(myModule.addition(3,5));
console.log(myModule.subtraction(5,3));
console.log(myModule.divide(5,3));
console.log(myModule.multiplication(myModule.constant,10));

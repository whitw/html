test();

function test(){
  console.log("test");
  //fn hoisting
}

console.log(hello);
var hello = "hello";
//undefined

/*
var hello;
console.log(hello);
hello = "test";
처럼 동작. var hoisting
*/

gogo();
var gogo = function(){
  console.log("gogo");
}
//Uncaught TypeError: gogo is not a function
/*
var gogo;
gogo();
gogo = function(){~};
처럼 동작. var hoisting 
 */
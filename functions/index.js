//Function to reverse a string
function reverseString(str) {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

const x = reverseString("ahmed");

console.log(x);

/* 

note --> str is paramter
x --> argument "value"

*/

//Hoisting

/*
the declaration become at the top of the script 
this happens for both the functions and variables

*/

//Example of Hoisting

function HoistingExample() {
  console.log(x);
  var x = 10;
}
HoistingExample();

/*

we have 2 options to declare a function 

1) function
function ss()
{

} 
2) function expression 

const s = function(x){

}
*/

const tt = function y() {
  console.log("from function expression");
};

tt(); //this is right
//y(); // this is wrong

1;
1;
2;
1;
1;

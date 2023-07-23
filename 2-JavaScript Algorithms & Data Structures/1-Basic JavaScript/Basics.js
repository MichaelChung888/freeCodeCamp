/* Arrays */
const myArray [1, 2 ,3, 4];

myArray.pop(); //removes end of array i.e 4
myArray.shift(); //removes front of array i.e 1
myArray.push(5); //pushes "5" to the end of the array
myArray.unshift(0); //pushes "0" to the beginning of the array

/* Functions */

function reusableFunction() {
    console.log("Hi World")
  }
  
  reusableFunction();

/* Global Variables */
/*
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code.

Variables declared without the "let" or "const" keywords are automatically created in the global scope. This can create 
unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.
*/

let myGlobal = 10;

function fun1() {
  oopsGlobal = 5; //This is accidentally made global as it has no keyword behind it

}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* Equality and if statements */
/*
Strict equality (===) is the counterpart to the equality operator (==). Strict equality will check not only for "value" also but "type" too
*/
function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

/* Inequality */
/*
Likewise Strict inequality (!==) will only return false if the "value" and "type" are the same whereas (!=) will return false by checking "value" only
*/

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

/* Logical operators */

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    else{
        return "No";
    }
}

function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    else {
    return "Inside";
    }
}

/* Swtich */

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val) {
      case 1: 
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
}

/* JavaScript objects */
/*
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

You can also check if an object owns a "property" by using the .hasOwnProperty() method
*/

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };

const carModel = anotherObject.model;
const carMake = anotherObject["make"];

delete anotherObject[5];

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }
    else{
      return "Not Found";
    }
}

/* While and For Loops */

const ourArray = [];
let i = 5;
while (i >= 0) {
  ourArray.push(i);
  i--;
}

const anArray = [];
for (let i = 1; i <= 5; i++) {
  anArray.push(i);
}

/* Do Loops */
const Array = [];
let x = 10;
do {
  myArray.push(x);
  x++;
} while (x < 5);

/* Recursive functions */
/*
A function that returns the sum of the first "n" elements in an array e.g sum([2, 3, 4], 2) should return 5;
*/
function sum(arr, n) {
    if(n <= 0){
      return 0;
    }
    return arr[n-1] + sum(arr, n-1)
  }

/* parseInt() */
/*
Takes 2 parameters: 1)A string to convert to an integer 2)The radix, here radix/base 2 means binary, radix 10 is decimal and etc
*/
function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");

/* Ternary Operator */
function checkEqual(a, b) {
    return (a == b) ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

function checkSign(num) {
    return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}
checkSign(10);

/* More recursion */
/*
We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing 
the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return 
an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion 
by calling itself and must not use loops of any kind.
*/
function countdown(n){
    if (n < 1) {
      return [];
    }
    else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray; 
    }
  }
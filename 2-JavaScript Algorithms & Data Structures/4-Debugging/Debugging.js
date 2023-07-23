///////////////////////////////////////////////////* Printing to console *///////////////////////////////////////////////////
let a = 5;
let b = 1;
let sumAB = a + b;
console.log(sumAB);



///////////////////////////////////////////////////* More on console *///////////////////////////////////////////////////
/*
There are many methods to use with console to output messages. log, warn, and clear to name a few 
The freeCodeCamp console will only output log messages, while the browser console will output all messages

When you make changes to your code, it will automatically run and show the logs
The freeCodeCamp console is then cleared each time your code runs.

You can open the console on a website by right-clicking and pressing inspect, then navigate to console
*/
console.log("Hello");
console.warn("Careful");
console.clear();



///////////////////////////////////////////////////* typeof() *///////////////////////////////////////////////////
let seven = 7;
let three = "3";
console.log(seven + three); //outputs 73
console.log(typeof(seven)) //outputs number
console.log(typeof(three)) //outputs string
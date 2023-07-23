///////////////////////////////////////////////////* Comparing Scopes of Var and Let *///////////////////////////////////////////////////
/*
"var" tends to be global whereas "let" makes the scope of that variable limited to that block
The first example is wrong whereas the second example is right
*/

function checkScope() {
    var i = 'function scope';
    if (true) {
    var i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

function checkScope() {
    let i = 'function scope';
    if (true) {
    let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}



///////////////////////////////////////////////////* Const *///////////////////////////////////////////////////
/* 
constant declarations that cannot be changed
Note: About const Arrays,that are mutable but cannot be reassigned or redeclared
*/

const s = [5, 7, 2];

s[0] = 2;
s[1] = 5;
s[2] = 7

s = [6, 5] //This will throw error



///////////////////////////////////////////////////* Preventing object mutation *///////////////////////////////////////////////////

const MATH_CONSTANTS = {
    PI: 3.14
  };
Object.freeze(MATH_CONSTANTS); //This will prevent any data mutation on the object



///////////////////////////////////////////////////* Arrow functions *///////////////////////////////////////////////////
/*
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
*/

//Example 1)
const magic = function() { //These are all the same
    return new Date();
}

const magic = () => { //These are all the same
    return new Date();
}

const magic = () => new Date(); //These are all the same


//Example 2) Syntax
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}





///////////////////////////////////////////////////* Rest Parameter *///////////////////////////////////////////////////
/*
The rest parameter is defined as ""..." followed by a name
It allows you to take any number of arguements
*/

//Example 1)
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
}

//Example 2)
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
myFun(2, 3 ,4, 5, 6, 7, 8)



///////////////////////////////////////////////////* Spread Arguement *///////////////////////////////////////////////////
/*
Spread Arguement is the same syntax which allows you to spread or unpack an array
*/
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Unpacks and copies arr1 into arr2

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //finds the max value in an array by "spreading"" the values



///////////////////////////////////////////////////* Destructuring Assignment *///////////////////////////////////////////////////
const user = { name: 'John Doe', age: 34 };

const name = user.name; //1) This is
const age = user.age;   //the same

const {name, age} = user; //2) As this
const {name: userName, age:userAge} = user; //3) Or this accept its assigned to variables userName and userAge



///////////////////////////////////////////////////* Destructuring Assignment with Nested Objects *///////////////////////////////////////////////////
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const lowToday = LOCAL_FORECAST.today.low;      //1) Again, this is
const highToday = LOCAL_FORECAST.today.high;    //the same

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST; //2) As this



///////////////////////////////////////////////////* Destructuring Assignment with Arrays *///////////////////////////////////////////////////
const [a, b] = [1, 2, 3, 4, 5, 6]; //a=1 , b=2
const [a, b,,, c] = [1, 2, 3, 4, 5, 6]; //a=1 , b=2 , c=5
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7]; //They can also be destructured or sliced using rest parameter

[a, b] = [b, a]; //Can swap values around using destructing assignment



///////////////////////////////////////////////////* Destructuring Assignment when passing an object to a function *///////////////////////////////////////////////////
//Example 1)
const profileUpdate = (profileData) => { const { name, age, nationality, location } = profileData; } //1) This is the same 
const profileUpdate = ({ name, age, nationality, location }) => { } //2) as this, It destructures the object passed immediately

//Example 2)
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; //1) This is the same
const half = ({max, min}) => (max + min) / 2.0; //2) As this



///////////////////////////////////////////////////* Template literals and backticks(`) *///////////////////////////////////////////////////
/*
1) Backticks( ` ) is a way to declare a multi line string, and allows template literals 
2) Template literals ( ${VARIABLE } ) is an efficient way of concatenating strings
*/

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;



///////////////////////////////////////////////////* Object Declarations using Object Shorthand *///////////////////////////////////////////////////
//The following are the same
const createPerson = (name, age, gender) => {
    return {
      name: name,
      age: age,
      gender: gender
    };
};

const createPerson = (name, age, gender) => ({name, age, gender});



///////////////////////////////////////////////////* Concise Function Declarations *///////////////////////////////////////////////////
//Note: "this" refers to the object itself i.e bicycle in this case
//The following is the same:
const bicycle = {
    gear: 2,
    setGear: function (newGear) {
      this.gear = newGear;
    }
};

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
};



///////////////////////////////////////////////////* Classes *///////////////////////////////////////////////////
// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
}

const zeus = new SpaceShuttle('Jupiter');

// Implicit constructor 
class Rocket {
    launch() {
      console.log("To the moon!");
    }
}

const atlas = new Rocket();



///////////////////////////////////////////////////* Getter and Setter methods in Classes *///////////////////////////////////////////////////
/*
1) Get methods are meant to return the value of an object's private variable
2) Set methods are meant to change the value of an object's private variable
*/

class Thermostat {
    constructor(fahrenheit){
      this._temperature = 5/9 * (fahrenheit - 32); //converts fahrenheit to celsius
    }
  
    get temperature(){
      return this._temperature;
    }
  
    set temperature(updateTemp){
      this._temperature = updateTemp;
    }
}

const thermos = new Thermostat(76); // Instantiating the object
let temp = thermos.temperature; //calling GET method
thermos.temperature = 26; //calling SET method



///////////////////////////////////////////////////* Exporting code *///////////////////////////////////////////////////
/*
You can "export" variables or functions and then "import" them into another file
*/
  
//Example 1)
export const uppercaseString = (string) => {
    return string.toUpperCase();
}

export const lowercaseString = (string) => {
    return string.toLowerCase();
}

//Example 2)
export {lowercaseString, uppercaseString};



///////////////////////////////////////////////////* Importing code *///////////////////////////////////////////////////
//Example 1)
import {lowercaseString, uppercaseString} from './string_functions.js'  
uppercaseString("hello");
lowercaseString("WORLD!");

//Example 2)
import * as stringFunctions from './string_functions.js'
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");



///////////////////////////////////////////////////* Export and Import default *///////////////////////////////////////////////////
/*
Default Exports: Default exports are useful to export only a single object, function, variable
During the import, we can use any name to import

Since export default is used to declare a fallback value for a module or file, you can only have one value be a 
default export in each module or file. Additionally, you cannot use export default with var, let, or const
*/

/* file module.js */
var x=4;
export default x;
 


/* test.js */
//Note how we don't need { } around the y as its default import, hence we can give it any name
import y from './module';
// note that y is used import x instead of
// import x, because x was default export

console.log(y);       
// output will be 4



///////////////////////////////////////////////////* JavaScript Promise *///////////////////////////////////////////////////
/*
A "Promise" is used to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so

Promise is a constructor function, so you need to use the new keyword to create one
It takes a function, as its argument, with two parameters - resolve and reject
These are methods used to determine the outcome of the promise

A promise has three states: pending, fulfilled, and rejected
Resolve is used when you want your promise to succeed, and reject is used when you want it to fail
*/
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
});



///////////////////////////////////////////////////* Handle Fulfilled Promise with then *///////////////////////////////////////////////////
/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request

After it completes you usually want to do something with the response from the server

This can be achieved by using the "then" method. The then method is executed immediately after your promise is fulfilled with resolve

Likewise you can use "catch" method for rejected promises
*/

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  
});
  
makeServerRequest.then(result => {
    console.log(result); //result comes from the arguement given to the resolve method i.e "We got the data" in this case
});

makeServerRequest.catch(error => {
    console.log(error); //error comes from the arguement given to the reject method i.e "Data not recieved" in this case
});

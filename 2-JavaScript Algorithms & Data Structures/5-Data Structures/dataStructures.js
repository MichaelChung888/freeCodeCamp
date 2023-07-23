///////////////////////////////////////////////////* splice() *///////////////////////////////////////////////////
/*
Takes 3 parameters:
1) index
2) No of elements to slice
3) item to insert into array at "index"

if only 1 parameter provided, it will splice the array from index to the end of array
*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
const sliced = arr.splice(3, 4); // [1, 7, 5, 2]
arr.splice(1, 0, 1000, [1, 2]) //Adds item "1000" and "[1, 2]"" starting at index 1
console.log(arr); // [2, 1000, [1, 2], 4, 5, 1]



///////////////////////////////////////////////////* slice() *///////////////////////////////////////////////////
/*
This function only takes 2 parameters
1) Starting index
2) End index but doesn't include the value at this index

Also, it will not modify the original array that was passed as parameter
*/
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear']; 
let todaysWeather = weatherConditions.slice(1, 3); // ['snow', 'sleet']



///////////////////////////////////////////////////* concat() *///////////////////////////////////////////////////
/*
concat method works for both strings and arrays
It also doesn't mutate the 2 original arrays
*/
[1, 2, 3].concat([4, 5, 6]); //[1, 2, 3, 4, 5, 6]



///////////////////////////////////////////////////* copy and Array with spread *///////////////////////////////////////////////////
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];



///////////////////////////////////////////////////* combine Arrays with spread *///////////////////////////////////////////////////
let fragment = ['to', 'code'];
let sentence = ['learning', ...fragment, 'is', 'fun']; // ['learning', 'to', 'code', 'is', 'fun']



///////////////////////////////////////////////////* indexOf() *///////////////////////////////////////////////////
/*
indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
*/
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates'); //-1
fruits.indexOf('oranges'); //2
fruits.indexOf('pears'); //1



///////////////////////////////////////////////////* in *///////////////////////////////////////////////////
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
};

//Example 1)
if('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users){
    console.log("Thats Everyone")
}

//Example 2)
if(users.hasOwnProperty('Alan') && users.hasOwnProperty('Jeff') && users.hasOwnProperty('Sarah') && users.hasOwnProperty('Ryan')){
    console.log("Thats Everyone")
}



///////////////////////////////////////////////////* for in statements *///////////////////////////////////////////////////
/*
Slowly goes through every property key in the object
Note: does not work in arrays, must use "for of statements"
*/
const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
  
function countOnline(allUsers) { //counts the number of users online from a "users" object
    let count = 0;
    for(const user in allUsers){
      if(allUsers[user].online == true){
        count++;
      }
    }
    return count;
}
  
console.log(countOnline(users));



///////////////////////////////////////////////////* for of statements *///////////////////////////////////////////////////
/*
How to go through every value in array
*/
const arr = [1, 2, 3, 7];

//Wrong - 0, 1, 2, 3
for(x in arr){
    console.log(x);
}

//Right - 1, 2, 3, 7
for(x of arr){
    console.log(x);
}

///////////////////////////////////////////////////* Object.keys() *///////////////////////////////////////////////////
/*
Returns an array of all the keys in an object e.g Object.keys(object);
*/
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
};

const allUser = Object.keys(obj); //[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
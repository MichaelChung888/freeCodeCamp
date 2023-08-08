//Q1 - Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both
function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//Q2 - Remove all elements from the given array that are of the same value as the other given arguements
function destroyer(arr, ...num) {
    let newArr = [...arr];
    
    function remove(arr, val){
      newArr = newArr.filter(element => element != val)
    }
  
    for(let i = 0; i < num.length; i++){
      remove(newArr, num[i])
    }
  
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



//Q3 - Make a function that looks through an array of objects and returns an array of all objects that have matching name and value pairs as the second arguement
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);
  
    return collection.filter(obj => {
      for (let i = 0; i < sourceKeys.length; i++) {
        if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
          return false;
        }
      }
      return true;
    });
}
  
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



//Q4 - Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase(); //the split() looks for either a 1)space 2)_ 3)capital letter
}

console.log(spinalCase("thisIsSpinalTap")); //this-is-spinal-tap



//Q5 - Pig Latin
//If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
//If a word begins with a vowel, just add way at the end.
function translatePigLatin(str) {
  let regex = /^[^aeiou]+/;
  let match = str.match(regex)
  if(match == null){
    str = str + "way";
  }
  else {
    str = str.replace(regex, "") + match[0] + "ay";
  }

  return str;
}

console.log(translatePigLatin("constant")); //onstantcay
console.log(translatePigLatin("algorithm")); //algorithmway



//Q6 - Search and Replace 2nd arguement with 3rd arguement in 1st arguement whilst preserving case of first character in 2nd arguement
function myReplace(str, before, after) {
  if(/[A-Z]/.test(before[0])){
    after = after.replace(after[0], after[0].toUpperCase());
  }
  else {
    after = after.replace(after[0], after[0].toLowerCase());  
  }
  return str.replace(before, after);
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"); //"A quick brown fox Leaped over the lazy dog"



//Q6 - Find the missing letters 
function fearNotLetter(str) {
  let count = 0;
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  while(str[0] != alpha[count]){
    count++;
  }

  for(let i = 0; i < str.length; i++){
    if(str[i] != alpha[count + i]) {
      return alpha[count + i];
    }
  }
}

fearNotLetter("stvwx"); //return "u"



//Q7 - Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(...arr) {

  let finalArr = [];

  for(let j = 0; j < arr.length; j++){
    for(let i = 0; i < arr[j].length; i++){
      if(finalArr.indexOf(arr[j][i]) < 0){
        finalArr.push(arr[j][i]);
      }
    }
  }
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



//Q8 - Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let regex = /(?=&|<|>|"|')./g;
  let match = str.match(regex);
  console.log(match);
  if(match == null){ }
  else{
    for(let i = 0; i < match.length; i++){
      if(match[i] == '&'){
        str = str.replace('&', "&amp;")
      }
      else if(match[i] == '<'){
        str = str.replace('<', "&lt;")
      }
      else if(match[i] == '>'){
        str = str.replace('>', "&gt;")
      }
      else if(match[i] == '"'){
        str = str.replace('"', "&quot;")
      }
      else {
        str = str.replace("'", "&apos;")
      }
    }
  }
  return str;
}

console.log(convertHTML("abc")); //abc
console.log(convertHTML("Dolce & Gabbana")); //Dolce &amp; Gabbana



//Q9 - Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let num1 = 0;
  let sum = 0;
  for(let num2 = 1; num2 <= num;){
    if(num2 % 2 != 0){
      sum += num2;
     }
    num2 += num1;
    num1 = num2 - num1;
  }
  return sum;
}

console.log(sumFibs(4)); //5 as 1+1+3



//Q10 - Sum All Primes up to a number
function sumPrimes(num) { //more on the solution to this at https://www.w3resource.com/javascript-exercises/javascript-math-exercise-43.php#:~:text=JavaScript%20Code%3A,%7D%20return%20primes%3B%20%7D%20console.
  var store  = [], i, j;
  let sum = 0;
  for (i = 2; i <= num; ++i) 
  {
      if (!store [i]) 
        {
          sum += i;
          for (j = i << 1; j <= num; j += i) 
          {
              store[j] = true;
          }
      }
  }
  return sum;
}

console.log(sumPrimes(10)); //return 17



//Q11 - Find Smallest Common Multiple for a range of values
//You first take the guarenteed common factor = upperbound = multiplying all the numbers together in range
//After then slowly go up in multiples of max(largest number in range) up to upperbound and check along the way if it could be a smaller LCM
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;

  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i == 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1,5]); //return 60


//Q12 - Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  const flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } 
    else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

steamrollArray([1, [2], [3, [[4]]]]);



//Q13 - Return an English translated sentence of the passed binary string.
function binaryAgent(str) {
  let output = [];
  let binary = str.split(" ");

  for(let i = 0; i < binary.length; i++){
    let val = parseInt(binary[i], 2);
    output.push(String.fromCharCode(val));
  }

  return output.join("");
}
/* Alternative
function binaryAgent(str) {
  let output = [];
  str.split(" ").forEach((element) => {
    output.push(String.fromCharCode(parseInt(element, 2)));
  });
  return output.join("");
}
*/

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//returns "Aren't bonfires fun!?"



//Q14 - Check if the predicate (second argument = object property to check in collection) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
  for(let obj of collection){
    if(!obj[pre]){
      return false;
    }
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");



//Q15 - Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
//      If no arguements provided, returned undefined.
function addTogether(...val) {
  for(let x of val){
    if(typeof(x) != "number"){
      return undefined;
    }
  }

  if(val.length == 2){
    return val[0] + val[1];
  }
  else if(val.length == 1){
    return  function(num){ 
              if(typeof(num) != "number") return undefined;
              return num + val[0];
            }
  }
  else {
    return undefined;
  }
}
/* Alternative
function addTogether() {
  const [first, second] = arguments;

  if (typeof (first) === "number") {
    if (typeof (second) === "number") return first + second;
    if (arguments.length === 1) return (second) => addTogether(first, second);
  }
}
*/

addTogether(2,3);
addTogether(5)(7);
addTogether(2)([3]);



//Q16 - Make a Person
/*
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
*/
const Person = function(first, last) {
  let fname = first;
  let lname = last;
  this.getFirstName = () => fname;
  this.getLastName = () => lname;
  this.getFullName = () => fname + " " + lname;
  this.setFirstName = (first) => { fname = first};
  this.setLastName = (last) => { lname = last};
  this.setFullName = (first, last) => {fname = first; lname = last;}
};

let mike = new Person("Michael", "Chung");
console.log(mike.getFirstName());



//Q17 - Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
/*
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

According to Kepler's Third Law, the orbital period (T) of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π√(a^3/μ)
 
a - is the orbit's semi-major axis
μ - =GM is the standard gravitational parameter
G - is the gravitational constant
M - is the mass of the more massive body

*/
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let resArr = arr.map(obj => ( {name: obj.name, orbitalPeriod: Math.round(2*Math.PI*Math.sqrt(((obj.avgAlt+earthRadius)**3)/GM))} ));

  return resArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])); //return [ { name: 'sputnik', orbitalPeriod: 86400 } ]
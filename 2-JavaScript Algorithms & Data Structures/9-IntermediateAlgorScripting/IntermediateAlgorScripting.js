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
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
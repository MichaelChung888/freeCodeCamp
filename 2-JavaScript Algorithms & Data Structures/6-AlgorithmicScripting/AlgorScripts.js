//Q1 - Reverse the provided string and return the reversed string.
function reverseString(str) { //Or can do a for loop for this question
    const splitstr = str.split(""); //splits string where ever it finds ""(basically everywhere and all characters) i.e ["h", "e", "l", "l", "o"]
    const reversestr = splitstr.reverse(); //reverses array i.e ["o", "l", "l", "e", "h"]
    const result = reversestr.join("") //joins elements in array into a string with "" inbetween them i.e "olleh"
    return result;
}
  
reverseString("hello");



//Q2 - Factorialize a Number
function factorialize(num) {
    if(num <= 1){
      return 1;
    }
    return num * factorialize(num-1)
}
  
factorialize(5);



//Q3 - Find longest word in string
function findLongestWordLength(str) {
    const splitstr = str.split(" ") //splits string where ever it finds " "
    let current = 0;
    for(let i = 0; i < splitstr.length; i++){
      if(splitstr[i].length > current){
        current = splitstr[i].length;
      }
    }
    return current;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");



//Q4 - Return largest numbers in Array
function largestOfFour(arr) {

    let finalArr = [];
    let current = undefined;
  
    console.log(current)
  
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(current === undefined){
                current = arr[i][j];        
            }
            else if(arr[i][j] > current){
                current = arr[i][j];
            }
        }
        finalArr.push(current);
        current = undefined;
    }
    return finalArr;
}
  
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



//Q5 - Confirm the Ending of a string
function confirmEnding(str, target) {
    const slen = str.length;
    const tlen = target.length;
    if(str.slice(slen - tlen, slen + 1) == target){
      return true;
    }
    else {
      return false;
    }
}
  
confirmEnding("Bastian", "an");



//Q6 - Title case the first letter of each word in a sentence
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}
  
titleCase("I'm a little tea pot");



//Q7 - Given 2 arrays, copy each element of array1 into array2 at index n
function frankenSplice(arr1, arr2, n) {
    const finalarr = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n, arr2.length)];
    return finalarr;
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



//Q8 - Remove all falsy values from an Array. falsy are: [false, null, 0, "", undefined, and NaN]
function bouncer(arr) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) filteredArr.push(arr[i]); //It wil only push if the element arr[i] is truthy and not falsy
    }
    return filteredArr;
}



//Q9 - Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted
function getIndexToIns(arr, num) {
    arr.sort(function(a, b){return a - b}); //.sort() method sorts alphabetically but by passing parameter "function(a, b){return a - b}" allows it to sort numerically
    console.log(arr);

    if(arr.length == 0){
      return 0;
    }
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < num){
        if(i == arr.length-1){
          return i+1;
        }
        continue;
      }
      else {
        return i;
      }
    }
}
  
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));



//Q10 - Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}



//Q11 - Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    const result = [];
    let count = 0;
    while(count < arr.length){
      result.push(arr.slice(count, count+size));
      count += size;
      if(count+size >= arr.length){
        result.push(arr.slice(count, arr.length))
        return result;
      }
    }
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

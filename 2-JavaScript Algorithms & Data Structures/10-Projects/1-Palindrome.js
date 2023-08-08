/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/
function palindrome(str) {
    let regex = /(?=["_,.()-\/:\\\s])./g
    let match = str.match(regex);
  
    if(match != null){
      for (let i = 0; i < match.length; i++){
        str = str.replace(match[i], "")
      }
    }
  
    str = str.toLowerCase();
    let len = str.length;
  
    if(str.length % 2 == 0){
      if(str.slice(0, len/2) == str.slice(len/2, len).split("").reverse().join(""))
      { return true; }
      else { return false; }
    }
    else {
      if(str.slice(0, (len-1)/2) == str.slice((len+1)/2, str.length).split("").reverse().join(""))
      { return true; }
      else { return false; }    
    }
  }
  
  palindrome("not a palindrome") //false 
  palindrome("A man, a plan, a canal. Panama") //true
  palindrome("0_0 (: /-\ :) 0-0"); //true
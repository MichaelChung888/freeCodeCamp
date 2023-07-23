///////////////////////////////////////////////////* .test() method *///////////////////////////////////////////////////
let testStr = "freeCodeCamp";
let testRegex = /Code/;  //Regex that will search for the string "Code" in a test string
testRegex.test(testStr); //returns true;



///////////////////////////////////////////////////* Match Literal Strings with multiple possibilities *///////////////////////////////////////////////////
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);



///////////////////////////////////////////////////* Ignore Capital Cases While Matching(i flag) *///////////////////////////////////////////////////
/*
Case is the difference between uppercase letters and lowercase letters e.g "A" and "a"

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag
You can use it by appending it to the regex
*/
//Example 1)
let regex = /ignorecase/i //matches with: ignorecase, igNoreCase, and IgnoreCase for e.g

//Example 2)
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;  //Therefore e.g "FreeCodeCamp" works and "Free Code Camp" doesn't work
let result = fccRegex.test(myString);




///////////////////////////////////////////////////* Extract with .match() *///////////////////////////////////////////////////
//Example 1)
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); //returns [ 'expressions', index: 8, input: 'Regular expressions', groups: undefined ]

//Example 2)
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); //returns [ 'coding', index: 18, input: 'Extract the word \'coding\' from this string.', groups: undefined ]



///////////////////////////////////////////////////* Find repeated matches(g flag) *///////////////////////////////////////////////////
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; 
let result = twinkleStar.match(starRegex); //returns [ 'Twinkle', 'twinkle' ]



///////////////////////////////////////////////////* Wildcard character (.) *///////////////////////////////////////////////////
/*
The wildcard character . will match any one character
*/
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // this will match run, sun, fun, pun, etc...
let result = unRegex.test(exampleStr);



///////////////////////////////////////////////////* Match Single Character with Multiple Possibilities ([ ]) *///////////////////////////////////////////////////
//Example 1)
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/; //matches big, bug, bag and null
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//Example 2) match all vowels
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex); 



///////////////////////////////////////////////////* Match Numbers and Letters of the Alphabet (-) *///////////////////////////////////////////////////
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex); //returns [ 'J', 'e', 'n', 'n', 'y', '8', '6', '7', '5', '3', '0', '9' ]



///////////////////////////////////////////////////* Negate (Caret) Character (^ inside [ ]) *///////////////////////////////////////////////////
/*
When the Negate/Caret (^) Character is used inside of a character set ([ ]), it will look for anything not in that set
*/
//Example 1) Create a single regex that matches all characters that are not a number or a vowel
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); //returns [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ]


let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex); 



///////////////////////////////////////////////////* Match Characters that Occur One or More Times (+) *///////////////////////////////////////////////////
let difficultSpelling = "Mississippis";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex); //returns [ 'ss', 'ss', 's' ] instead of [ 's', 's', 's', 's', 's' ]
console.log(result)



///////////////////////////////////////////////////* Match Characters that Occur Zero or More Times (*) *///////////////////////////////////////////////////
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); //["goooooooo"]
gPhrase.match(goRegex); //["g"]
oPhrase.match(goRegex); //null



///////////////////////////////////////////////////* Match Characters that Occur Zero or One Time (Lazy Matching) (?) *///////////////////////////////////////////////////
/*
By default, regex uses "Greedy matching" finds the longest substring of the string that fits the regex pattern

The alternative is Lazy match, which finds the smallest substring of the string that fits the regex pattern, this can be applied using "?"
*/
//Example 1)
let text = "titanic";
let myRegex1 = /t[a-z]*i/; 
let result = text.match(myRegex1); //["titani"] which is longest substring

let myRegex2 = /t[a-z]*?i/; 
let result = text.match(myRegex2); //["ti"] which is shortest substring

//Example 2)
let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<.*>/; 
let result = text.match(myRegex1); //["<h1>Winter is coming</h1>"]

let myRegex2 = /<.*?>/; 
let result = text.match(myRegex2); //["<h1>"]



///////////////////////////////////////////////////* Match Beginning String Patterns (^ outside [ ]) *///////////////////////////////////////////////////
/*
When the Negate/Caret (^) Character is used outside of a character set ([ ]), it will search for patterns at the beginning of a string
*/
let firstRegex = /^Ricky/;

let firstString = "Ricky is first and can be found.";
firstRegex.test(firstString); //return true

let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //return false



///////////////////////////////////////////////////* Match Ending String Patterns ($) *///////////////////////////////////////////////////
let storyRegex = /story$/;

let theEnding = "This is a never ending story";
storyRegex.test(theEnding); //return true

let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); //return false



///////////////////////////////////////////////////* Match All Letters and Numbers and "_" (\w = [A-Za-z0-9_]) *///////////////////////////////////////////////////
//Example 1)
let regex = /\w+/;
let test = "important_var 42";
let result = test.match(regex); //return [ 'important_var', '42' ]

//Example 2) Count all alphanumeric characters in the string
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;



///////////////////////////////////////////////////* Match Everything But Letters and Numbers and "_" (\W = [^A-Za-z0-9_]) *///////////////////////////////////////////////////
//Example 1)
let shortHand = /\W/;
let numbers = "42%";
numbers.match(shortHand); //return ["%"]

let sentence = "Coding!";
sentence.match(shortHand); //return ["!"]

//Example 2) Count all non-alphanumeric characters in the string
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length;



///////////////////////////////////////////////////* Match All Numbers (\d = [0-9]) *///////////////////////////////////////////////////
//Example 1) Count how many digits there are in the string
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result = movieName.match(numRegex).length;



///////////////////////////////////////////////////* Match All Non-Numbers (\D = [^0-9]) *///////////////////////////////////////////////////
//Example 1) Count how many non-digits there are in the string
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; 
let result = movieName.match(noNumRegex).length;

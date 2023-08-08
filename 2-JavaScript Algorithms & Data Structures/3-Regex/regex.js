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



///////////////////////////////////////////////////* Match Characters that Occur Zero or One Time (?) *///////////////////////////////////////////////////
let american = "favorite";
let british = "favourite";
let favRegex = /favou?rite/; 
let result = favRegex.test(american); //returns true
let result = favRegex.test(british); //also returns true



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
//Example 1)
let firstRegex = /^Ricky/;
let firstString = "Ricky is first and can be found.";
firstRegex.test(firstString); //return true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); //return false

//Example 2)
const fruits = ["apple", "watermelon", "orange", "avocado", "strawberry"];
const fruitsStartsWitha = fruits.filter((fruit) => /^a/.test(fruit));
console.log(fruitsStartsWitha); // [ 'apple', 'avocado' ]
const fruitsWitha = fruits.filter((fruit) => /^a/.test(fruit));
console.log(fruitsWitha); // [ "apple", "watermelon", "orange", "avocado", "strawberry" ]



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



///////////////////////////////////////////////////* Restrict Possible Usernames *///////////////////////////////////////////////////
/*
1)Usernames can only use alpha-numeric characters.

2)The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3)Username letters can be lowercase and uppercase.

4)Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/

let username = "Z97"; //Other Examples: "JACK", "Jo", "AB1", not match "BadUs3rnam3", "007", "c57bT3", "J"
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/i; //alternatively /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
/*
1)^ - start of input
2)[a-z] - first character is a letter
3)[a-z]+ - following characters are letters
4)\d*$ - input ends with 0 or more digits
5)| - or
6)^[a-z] - first character is a letter
7)[0-9][0-9]+ - following characters are 2 or more digits
8)$ - end of input
*/
let result = userCheck.test(username);
console.log(username.match(userCheck));



///////////////////////////////////////////////////* Match Whitespace (\s = [\r\t\f\n\v]) *///////////////////////////////////////////////////
/*
matches whitespace, carriage return, tab, form feed, and new line characters
*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace).length;



///////////////////////////////////////////////////* Match Non-Whitespace (\S = [^\r\t\f\n\v]) *///////////////////////////////////////////////////
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;; // Change this line
let result = sample.match(countNonWhiteSpace).length;



///////////////////////////////////////////////////* Specify Upper, Lower or Exact Number of Matches ({ , }) *///////////////////////////////////////////////////
/*
You can specify the lower(l) and upper(u) number of patterns with quantity specifiers ({l,u}). 
You put two numbers between the curly brackets - for the lower and upper number of patterns.
*/
//Example 1)
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // This will match the phrase "Oh no" only when it has 3 to 6 letter h's.
let result = ohRegex.test(ohStr);

//Example 2)
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // This will match the word "Hazzah" only when it has 4 or more letter z's.
let result = haRegex.test(haStr);

//Example 3)
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // This will match the word "Timber" only when it has exactly 4 letter m's.
let result = timRegex.test(timStr);

//Example 4)


///////////////////////////////////////////////////* Positive and Negative Lookahead *///////////////////////////////////////////////////
/*
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along

Positive lookahead "X(?=Y)" means "look for X, but match only if followed by Y".
Negative lookahead "X(?!Y)" means "look for X, but match only if not followed by Y".

Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.
Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.
*/
//Example 1)
let pos = "Chair Cha1r 1Chair Cha1r";
let posRegex = /\w?(?=1)\d\w?/g; 
// The lookahead will find the position of the character that's not "1" and match it with \d, 
// if found then match an alphanumeric character with \w on either side if it exists
console.log(pos.match(posRegex)); // [ 'a1r', '1C', 'a1r' ]

let neg = "11C11 11111 1C1111 Chair ";
let negRegex = /\w?(?!1)\w\w?/g;
// The lookahead will find the position of the character that's not "1" and match the it with \w,
// if found then match an alphanumeric character with \w on either side if it exists
console.log(neg.match(negRegex)); // [ '1C1', '1C1', 'Cha', 'ir' ]

//Example 2)
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d).*/; 
// Checks if 1) The password is between 3-6 characters 2) The password has at least 1 number anywhere in the string
//If conditions are satisfied, .* will collect and match the whole string the whole string
console.log(password.match(checkPass)); // [ 'abc123' ]

//Example 3)
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/; // Checks the string is at least 6 characters and contains 2 consecutive digits
let result = pwRegex.test(sampleWord); // false



///////////////////////////////////////////////////* Check For Mixed Grouping of Characters ( () ) *///////////////////////////////////////////////////
//Example 1)
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; //Will match Penguin or Pumpkin
testRegex.test(testStr);

//Example 2)
let myString = "Eleanor Roosevelt";
let myRegex = /(franklin|eleanor)\s.*Roosevelt/i; // Matches e.g "Franklin D. Roosevelt", "Eleanor Roosevelt", Not Match e.g "FranklinRoosevelt"
let result = myRegex.test(myString); 



///////////////////////////////////////////////////* Reuse Patterns Using Capture Groups *///////////////////////////////////////////////////
/*
Capture groups help find repeated substrings by enclosing the regex pattern for the substring in "( )"". 
The substring matched by the group is saved to a temporary "variable", which can be accessed using a backslash and the number of the capture group within the same regex 
Capture groups are automatically numbered by the position of their "(" (from left to right), starting at 1.
*/
//Example 1)
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;  //This will match a string of any number repeated 3 times, seperated by spaces
let result = reRegex.test(repeatNum);

//Example 2)
let repeatNum = "42 42 42";
let reRegex = /^(\d+\s)(\d+) \1*\2$/; //This will match a string of any number repeated 2 or more times, seperated by spaces
let result = reRegex.test(repeatNum);



///////////////////////////////////////////////////* Use Capture Groups to Search and Replace *///////////////////////////////////////////////////
//Example 1)
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); //returns "The sky is blue"

//Example 2)
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); //returns "Camp Code"



///////////////////////////////////////////////////* Remove Whitespace from Start and End */////////////////////////////////////////////////// 
/*
Note: String.prototype.trim() would work here, but remove it with capture groups
*/
let hello = "   Hello, World!  ";
let wsRegex = /\s{2,}/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result);
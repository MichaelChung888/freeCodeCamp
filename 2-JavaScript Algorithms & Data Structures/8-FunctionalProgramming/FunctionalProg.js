///////////////////////////////////////////////////* Basics of Functional Programming *///////////////////////////////////////////////////
/*
Functional programming is a style of programming where solutions are simple, isolated functions, 
without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT
*/
//Example 1)
const prepareTea = () => 'greenTea';

//Example 2)
const getTea = (numOfCups) => {
    const teaCups = [];
  
    for(let cups = 1; cups <= numOfCups; cups += 1) {
      const teaCup = prepareTea();
      teaCups.push(teaCup);
    }
    return teaCups;
};
  
const tea4TeamFCC = getTea(40);



///////////////////////////////////////////////////* More on Functional Programming *///////////////////////////////////////////////////
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



///////////////////////////////////////////////////* Principles of Functional Programming *///////////////////////////////////////////////////
/*
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
*/

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
                "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  newArr.push(bookName); // Add bookName parameter to the end of the new array.
  return newArr; // Return the new array.
}

function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(book_index, 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);




///////////////////////////////////////////////////* JS Callbacks *///////////////////////////////////////////////////
/*
A callback is a function passed as an argument to another function.
*/
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
//In the example above, myDisplayer is a called a callback function.
//It is passed to myCalculator() as an argument.



///////////////////////////////////////////////////* map Method to Extract Data from an Array *///////////////////////////////////////////////////
/*
In this exercise we are looking at .map()

The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element.
It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. 
The second is the index of that element and the third is the array upon which the map method was called.
*/
//Example 1)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
  
const names = users.map(user => user.name); //Callback function is "function(user){ return user.name };"
console.log(names); //[ 'John', 'Amy', 'camperCat' ]

//Example 2)
const watchList = [
{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
}
];

//Use map on watchList to assign a new array of objects to the ratings variable. 
//Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating

//Can be done like this
for (let i = 0; i < watchList.length; i++) {
    ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]}
  );
}

//Or like this
const ratings = watchList.map( movie => ({title: movie["Title"], rating: movie["imdbRating"]}) );



///////////////////////////////////////////////////* Implementing the map function on a prototype *///////////////////////////////////////////////////

Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

console.log( [1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]) );
console.log( [23, 65, 98, 5, 13].myMap(item => item * 2) );



///////////////////////////////////////////////////* filter Method to Extract Data from an Array *///////////////////////////////////////////////////
/*
filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns a truthy value
Like map, it does this without needing to modify the original array.

The callback function accepts three arguments. The first argument is the current element being processed
The second is the index of that element and the third is the array upon which the filter method was called
*/
//Example 1)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
  
const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); //[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]

//Example 2) 
const watchList = [
{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
}
];

const filteredList = watchList.map(movie => ({title: movie["Title"], rating: movie["imdbRating"]})).filter(movie => movie.rating > 8);
//First gets all the movie titles and ratings, then filters them for movies with rating over 8


///////////////////////////////////////////////////* Implementing the filter function on a prototype *///////////////////////////////////////////////////
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
          newArray.push(this[i]);
        }
      }
    return newArray;
};

console.log( [23, 65, 98, 5, 13].myFilter(item => item % 2) );
console.log( [1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index) );



///////////////////////////////////////////////////* Use the reduce Method to Analyze Data *///////////////////////////////////////////////////
/*
The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce
The callback function accepts four arguments:
1) The accumulator, which gets assigned the return value of the callback function from the previous iteration
2) Current element being processed
3) Index of element
4) Array upon which reduce is called

The reduce function has 2 parameters:
1) The callback function
2) Initial value for the accumulator
If no initial value is given, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
*/
//Example 1)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //64

//Example 2)
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(usersObj);

//Example 3) Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan:
const watchList = [
{
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
},
{
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
}
];
  
function getRating(watchList) {
    let movieRating = watchList.filter(movie => movie.Director === "Christopher Nolan").map(movie => ({rating: movie.imdbRating}));
    let averageRating = movieRating.reduce((sum, movie) => sum + parseFloat(movie.rating), 0) / movieRating.length;
    return averageRating;
}

console.log(getRating(watchList));



///////////////////////////////////////////////////* Use map, filter, or reduce to Solve a Complex Problem *///////////////////////////////////////////////////
/*
The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers)
*/
const squareList = arr => {
    let filtered = arr.filter(num => num > 0).filter(num => Number.isInteger(num));
    let square = filtered.map(num => num * num);
    return square;
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers); // [ 16, 1764, 36 ]



///////////////////////////////////////////////////* sort() *///////////////////////////////////////////////////
/*
JavaScript's default sorting method is by string Unicode point value, which may return unexpected results   
Therefore, it is encouraged to provide a callback function to specify how to sort the array items

When a callback function, called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction:
consider compareFunction(a, b):
1)If negative value returned: therfore b, a is the order;
2)If greater of equal to 0 value returned: therefore a, b is the order

Note: sort() mutates the original array
*/
//Example 1)
function alphabeticalOrder(arr) {
    return arr.sort();
}
  
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

//Example 2) We can use a copy of the array to avoid mutation
function nonMutatingSort(arr) {
  let newArr = [].concat(arr);
  return newArr.sort((a, b) => a - b);
}

console.log(nonMutatingSort([5, 6, 3, 2, 9])); // [ 2, 3, 5, 6, 9 ]



///////////////////////////////////////////////////* split() a string into an array *///////////////////////////////////////////////////
/*
The split method splits a string into an array of strings

It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression
*/
//Example 1)
const str = "Hello World";
const bySpace = str.split(" "); // ["Hello", "World"] 

//Example 2)
const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"]

//Example 3)
function splitify(str) {
    return str.split(/\W/) //It checks for any non-word character. Equivalent regex to /[^A-Za-z0-9_]/.
}
splitify("Hello World,I-am code"); // [ 'Hello', 'World', 'I', 'am', 'code' ]



///////////////////////////////////////////////////* join() a string into an array *///////////////////////////////////////////////////
/*
The join method is used to join the elements of an array together to create a string

It takes an argument for the delimiter that is used to separate the array elements in the string
*/

function sentensify(str) {
    return str.split(/\W/).join(" ")
}
  
console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("There,has,been,an,awakening"));



///////////////////////////////////////////////////* Apply Functional Programming to Convert Strings to URL Slug *///////////////////////////////////////////////////
/*
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL
*/
//Example 1)
function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "") //filter as it returns [ '', 'Winter', 'Is', '', 'Coming' ]
      .join("-")
      .toLowerCase();
}

//Example 2)
function urlSlug(title) {
    return title
      .toLowerCase()
      .trim()   //removes whitespace from the beginning and end of the string
      .split(/\s+/)
      .join("-");
}

console.log(urlSlug(" Winter Is  Coming"));




///////////////////////////////////////////////////* every() *///////////////////////////////////////////////////
/*
The every method works with arrays to check if every element passes a particular test
It returns a Boolean value - true if all values meet the criteria, false if not
*/
function checkPositive(arr) {
    return arr.every(num => num > 0);
}
  
checkPositive([1, 2, 3, -4, 5]);



///////////////////////////////////////////////////* some() *///////////////////////////////////////////////////
/*
Same as every() accept it checks if any element passes the particular test
*/
function checkAnyPositive(arr) {
    return arr.some(num => num > 0);
}

checkAnyPositive([1, 2, 3, -4, 5]);



///////////////////////////////////////////////////* Introduction to Currying and Partial Application *///////////////////////////////////////////////////
/*
The arity of a function is the number of arguments it requires
Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
*/
//Example 1)
function unCurried(x, y) {
    return x + y;
}
  
function curried(x) { //Can be curried into this
    return function(y) {
        return x + y;
    }
}

const curried = x => y => x + y //Or can be curried into this

curried(1)(2) //This is how you call the function, this would have value 3;

//Example 2)
function add(x) {
    return y => z => x + y + z;
}

console.log(add(10)(20)(30)); //returns 60
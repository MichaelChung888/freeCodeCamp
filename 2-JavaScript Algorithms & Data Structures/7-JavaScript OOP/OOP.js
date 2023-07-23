///////////////////////////////////////////////////* Recap of objects *///////////////////////////////////////////////////
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs."}
};
  
dog.sayLegs();



///////////////////////////////////////////////////* Constructor Function *///////////////////////////////////////////////////
/*
Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. They follow a few conventions:
1)Constructors are defined with a capitalized name to distinguish them from other functions.
2)Constructors use the keyword "this" to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
3)Constructors define properties and behaviors instead of returning a value as other functions might.
*/

function Dog() {
    this.name = "Albert";
    this.color = "white";
    this.numLegs = 2;
}



///////////////////////////////////////////////////* Constructors with Arguements *///////////////////////////////////////////////////
let hound = new Dog();
hound.name = "Rupert"

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
  
let terrier = new Dog();



///////////////////////////////////////////////////* Verify Object's Constructor with "instanceof" *///////////////////////////////////////////////////
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
console.log(myHouse instanceof House); //Will be true as "myHouse" is an instance of constructor "House"



///////////////////////////////////////////////////* Prototype properties *///////////////////////////////////////////////////
/*
As all the instances of dogs have numLegs = 4, it can cause a lot of duplicated variables.

protype variables are shared among all instances of the object which will help solve this problem
*/

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy"); 



///////////////////////////////////////////////////* Adding all properties to an array *///////////////////////////////////////////////////
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
  
  // The below code will add each property of "beagle" object to its specified array
for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
}



///////////////////////////////////////////////////* Constructor Property *///////////////////////////////////////////////////
function Dog(name) {
    this.name = name;
}
  
  // Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) { //It calls the constructor of the object and checks it matches the Dog constructor
      return true;
    } else {
      return false;
    }
}

let husky = new Dog("Henry")
joinDogFraternity(husky);



///////////////////////////////////////////////////* Change the Prototype to a New Object *///////////////////////////////////////////////////
/*
Its really tedious to keep making prototype properties for an object, when instead we can just set the prototypes to an object itself
*/
//Example 1)
Dog.prototype.numLegs = 2;
Dog.prototype.eat = function() {
    console.log("nom nom nom");
}  
Dog.prototype.describe = function() {
    console.log("My name is " + this.name);
}

//Example 2)

Dog.prototype = {
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    } 
};



///////////////////////////////////////////////////* Remember to Set the Constructor Property when Changing the Prototype *///////////////////////////////////////////////////
/*
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property
*/

husky.constructor === Dog; //evaluates false after you add prototype properties
husky.constructor === Object; //true
husky instanceof Dog; //true

//Therefore remember to add the constructor property back to the protype object
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
};



///////////////////////////////////////////////////* Understand Where an Object’s Prototype Comes From *///////////////////////////////////////////////////
let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); //Will evaluate true, similiar to "instanceof"



///////////////////////////////////////////////////* Prototype Chain *///////////////////////////////////////////////////
/*
All objects in JavaScript have a prototype. Also, an object’s prototype itself is a prototype.

An example of prototype chan is the hasOwnProperty(). It's defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by beagle.

In other words Object is a supertype for both Dog and beagle(and for every object in JavaScript). beagle is a subtype of Dog and Object.
*/
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype); //Both evaluate true



///////////////////////////////////////////////////* Set the Child's Prototype to an Instance of the Parent(Inheritance) *///////////////////////////////////////////////////   
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

function Bird() { }

Dog.prototype = Object.create(Animal.prototype); //This is the inheritance, by making objects "Dog" and "Bird" inherit the object
Bird.prototype = Object.create(Animal.prototype); //"Animal", they now both have access to the "eat" method. This helps reduce reusable code
let beagle = new Dog();



///////////////////////////////////////////////////* Manually resetting inherited constructor properties *///////////////////////////////////////////////////   
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird; //They both inherit Animal but we need to reset their constructor
Dog.prototype.constructor = Dog;   //property back to their original constructor, which can be done manually

let duck = new Bird();
let beagle = new Dog();



///////////////////////////////////////////////////* Adding methods after inheritance */////////////////////////////////////////////////// 
Dog.prototype = Object.create(Animal.prototype); //Inherits Animal
Dog.prototype.constructor = Dog;                            //Now individually changing the constructor and
Dog.prototype.bark = function() { console.log("Woof!") }    //adding a bark() method to Dog object only



///////////////////////////////////////////////////* Override inherited methods */////////////////////////////////////////////////// 
/*
If you have instance let beagle = new Dog(); and then you call beagle.eat(), this is JavaScript will look for that method through the prototype chain:

1) beagle => Is eat() defined here? No.
2) Dog => Is eat() defined here? => Yes. Execute it and stop searching.
3) Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4) Object => JavaScript stopped searching before reaching this level.
*/
function Animal() { }
function Dog() { }

Animal.prototype.eat = function() { return "Yum"; }; //Defining eat() in parent
Dog.prototype = Object.create(Animal.prototype); //Inherit
Dog.prototype.eat = function() { return "Yummy"} //Overriding eat() method in child



///////////////////////////////////////////////////* Mixin function */////////////////////////////////////////////////// 
/*
Basically inheritance where you want to recycle reuable code but may be not practical as the objects may be unrelatable

Bird and Airplanes can both fly however they are unrelated objects
*/

let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};
  
  let plane = {
    model: "777",
    numPassengers: 524
};
  
flyMixin(bird); //Now they can
flyMixin(plane); //both fly



///////////////////////////////////////////////////* Private variables or Closure */////////////////////////////////////////////////// 
/*
The simplest way to make this public property private is by creating a variable within the constructor function
*/

function Bird() {
    let hatchedEgg = 10; //private or closure
    this.name = "Albert"; //public

    this.getHatchedEggCount = function() { 
        return hatchedEgg;
    };
}



///////////////////////////////////////////////////* Immediately Invoked Function Expression (IIFE) *///////////////////////////////////////////////////
/*
syntax: ( *some function* )()

This is an anonymous function expression that executes right away 
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked

The function below outputs "Chirp, chirp!"" immediately.
*/
(function () {
    console.log("Chirp, chirp!");
})();



///////////////////////////////////////////////////* Using IIFE to create a module *///////////////////////////////////////////////////
/*
You can group related functions into a single object/module using IIFE e.g:
*/
//Example 1)
let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
};

let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
};

//Example 2)
//Can be grouped into an object named funModule using an IIFE 
let funModule = (function () {
    return {
        // v This is whats returned by the IIFE v //
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
        // ^ This is whats returned by the IIFE ^ //
    }
})();
//Now we have a single object that contains all the Mixin code, an example of using this is:

funModule.isCuteMixin(puppy);
puppy.isCute();
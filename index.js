/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


// creating a constructor function 
// it takes 3 properties name , age and stomach which is an empty array 
console.log('Task1');

function Person(name, age){
  this.name = name;
  this.age = age;
  this.stomach = [];
}

// create an eat method that gives the person the ability to eat some edible - it has a param of something that we can pass food into 
// if the stomach length is < 10 the person can eat 
// we want to push the argument of something edible to the array (stomach)

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

// we need to create a poop method 
Person.prototype.poop = function(){
  this.stomach = [];
}

// method called toString - needs to return a string with name and age 

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

// create my object 

const personOne = new Person('Bea', 29);

console.log(personOne.toString());
personOne.eat('pizza');
personOne.eat('boba');
personOne.eat('brownies');
console.log(personOne.stomach);
personOne.poop();
console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//creating a constructor functions
//takes 2 properties model, milesPerGallon, tank[],odometer[]

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

//create a fill method that Gives cars the ability to get fueled with- Add the gallons (param) to `tank`.
//if tank is at 0 -> fill tank with X amount of gallons (param) 10?
//then we want to push gallons to the tank

 Car.prototype.fill = function(gallons){
  this.tank += gallons
  };

 //**stretch below **
 //next we need to create another method .drive that tasks X distance as param

 Car.prototype.drive = function(distance){ 
  if (this.tank - distance / this.milesPerGallon > 0){ //tank of gas, minus how many miles driven divided by mpg is greater than 0,
  this.odometer += distance // then the odometer will add the distance (param) amount driven
  this.tank -= distance / this.milesPerGallon  //then the tank subtracts gallons used per mile
  }else { //if this tank minus how many miles driven divided by mpg is lessthan or equal to 0,
    this.odometer += this.milesPerGallon * this.tank //then the miles driven will still add on to odometer
    this.tank = 0 //reassign to zero not negative
    return `I ran out of fuel at ${this.odometer} miles!`;
  } 
  }
// += assignment operator adds a value to a variable.
//-= operator subtracts a value from a variable.
//this odometer += (this.mpg * this.tank)

 const carOne = new Car ('Jetta', 24);

 console.log('Task 2 - fill the tank');
 carOne.fill(10);
 console.log(carOne);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age) //passing this 'this'when calling person
  this.favoriteToy = favoriteToy;

}
Baby.prototype = Object.create(Person.prototype)
Baby.prototype.play = function() {
  return `Playing with this ${this.favoriteToy}`
}

let Sam = new Baby('Sam',1 ,'Teddy bear');

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global/Window Binding - when in the global scope, the value of THIS will be the window or console object
  2. Implicit Binding - implied that if you're using a method on an object that the context that you want is bound to what is left of the dot. Whenever a function is called by a preceding dot, the object left of the dot gets THIS
  3. New Binding - has to do with constructor functions - whenever a constructor function is used, THIS refers to the specific instance of the object that is created and returned by the constructor function
  4. Explicit Binding - [.bind .call .apply] binding objects together - whenever JavaScripts .call or .apply method is used, THIS  is explicitly defined
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

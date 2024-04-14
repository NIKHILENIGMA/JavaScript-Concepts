//* Object in JS

//@ Create Object in Js

//# method 1. Object Literals:

const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// console.log(person.greet()); /// Output : Hello, my name is John Doe

//# method 2. Using the new Object() Syntax:
const person2 = new Object();

person2.name = "John Doe";
person2.age = 30;
person2.greet = function () {
  console.log("Hello, my name is " + this.name);
};

// console.log(person2); /// Output : { name: 'John Doe', age: 30, greet: [Function (anonymous)] }
// console.log(person2.greet()); /// Output : Hello, my name is John Doe

//# Method 3. Constructor Functions:

function Person3(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name} and his age is ${this.age}`);
  };
}

const person3 = new Person3("John Doe", 30);

//   console.log(person3.greet()); /// Output: Hello, my name is John Doe and his age is 30

//# Method 4. Object.create():

const personProto = {
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const john = Object.create(personProto);
john.name = "John Doe";
john.age = 30;

console.log(john);
console.log(personProto);

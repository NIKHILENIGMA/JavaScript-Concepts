// @ Arrow function

const user = {
  name: "Edwin",
  email: "cezujoc@cik.sz",

  welcomeMessage: function () {
    console.log(`${this.name} Welcome home!`);
  },
};

console.log(user.email);///Output: cezujoc@cik.sz

console.log(user.welcomeMessage()); ///Output: Edwin Welcome home!

user.name = "hitest";
console.log(user.welcomeMessage()); ///Output: hitest Welcome home!

console.log(this); ///Output: {}

try {
  const normalFunction = function () {
    let constant = " String ";
    console.log(this); ///Output: <ref *1> Object [global] {entire object}
    console.log(this.constant); ///Output: undefined
  };

  //   normalFunction();

  const arrowFunction = () => {
    let constant = " String ";
    console.log(this); ///Output: {}
    console.log(this.constant); ///Output: undefined
  };

  arrowFunction();
} catch (error) {
  console.log(`Error message :: ${error}`);
}

//note: In general, arrow functions are concise and often more convenient for certain use cases, especially when working with asynchronous code or functional programming concepts. However, the choice between normal functions and arrow functions depends on the specific requirements of your code and the behavior you need in terms of this binding, arguments handling, and other factors.

// # Arrow functions

const addTwo = (num1, num2) => num1 + num2; //note Do not need to write "return" keyword
//$ This method is known as implicit method
console.log(addTwo(25, 25)); /// Output: 50

// Return object in implicit method
const obj = () => ({
    username: "Samuel",
    password: "sGNVtHifejmJyLTylfL"
}); //note Do not need to write "return" keyword

console.log(obj().username); /// Output: Samuel


// When using return keyword
const addThree = (num1, num2, num3) => {
    return num1 + num2 + num3; //note Do need to write "return" keyword
    //$ This method is known as explicit method
};
console.log(addThree(25, 25, 25));/// Output: 75
//note: While using curly braces always use return keyword 

//  While not using return keyword
const addThre = (num1, num2, num3) => {
    num1 + num2 + num3; //note Do need to write "return" keyword
};
console.log(addThre(25, 25, 25));/// Output: undefined

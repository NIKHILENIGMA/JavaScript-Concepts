//# toString method
//note: The toString() method of Number values returns a string representing this number value.

const circleRadius = 45;
console.log(circleRadius.toString());
/// Output: 45

// # toFixed method
//note: The toFixed() method of Number values formats this number using fixed-point notation

const price = 12056;
console.log(price.toFixed(2));
/// Output: 12056.00

//# toExponential 
//note: The toExponential() method of Number values returns a string representing this number in exponential notation.
const expo = 124;
console.log(expo.toExponential());
/// Output:1.24e+2

// # toLocalString
// note:The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. In implementations with Intl.NumberFormat API support, this method simply calls Intl.NumberFormat.

const bigNum = 1000000000;
console.log(bigNum.toLocaleString('en-IN')) //India value
/// Output: 1,00,00,00,000 

console.log(bigNum.toLocaleString('en-US')) //USA value
/// Output: 1,000,000,000 

//# toPrecision
//note: The toPrecision() method of Number values returns a string representing this number to the specified precision.
const preciseValue = 123.456
console.log(preciseValue.toPrecision(4));
// /// Output: "123.5"


//****************************Maths ******************************

console.log(Math.PI); ///Output: 3.141592653589793

console.log(Math.SQRT2); ///Output: 1.4142135623730951

console.log(Math.abs(-21)) ///Output : 21 convert negative to absolute value

console.log(Math.pow(4,3)) ///Output: 64 
// note: first value can be any number and second value will be power 

console.log(Math.exp(0)); ///Output 1

console.log(Math.exp(1)); ///Output 2.718281828459
// note: if you want to find any e to the power value (value)

console.log(Math.round(225.95657)); ///Output 226

console.log(Math.random()); ///Output 0.4552489321182551
//note this values will be between 0-1

console.log(Math.ceil(4.2)); ///Output 5

console.log(Math.floor(4.8)); ///Output 4

//$ Creating a random number generator
const max = Math.max(4)

const min = Math.min(1)

console.log(Math.floor((Math.random()*10) + 1)) ; ///Output 5
// note: You can generator random number b\w 1-10, if you want to increase max value then just multiple max value random function

console.log(Math.floor((Math.random()*(max - min + 1)) + min)); ///Output 16
//note: this will create random value b\w max and min range







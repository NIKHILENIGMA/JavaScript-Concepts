// @ String interpolation

const firstName = "Nikhil";
const repoCount = 12;
// console.log(`My name is ${firstName} and my repository count is ${repoCount}`);
/// Output: My name is Nikhil and my repository count is 12

//@ Different method in string

const game = new String("Counter Stike 2");

// # Length method
const str = game.length;
console.log(str); /// Output: 15

//# includes method
//note: "search to determine whether a given string may be found within this string, returning true or false as appropriate."
//note: This method is case sensitive
const str2 = game.includes("counter");
const str3 = game.includes("Counter");
console.log(str2); /// Output: false
console.log(str3); /// Output: true

//# replace method
//note: The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement.
//note: The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match.
const paragraph = "I think Ruth's dog is cuter than your dog!";
const newParagraph = paragraph.replace("Ruth's", "my"); //First value what you want to replace and second value which will be replace the first value
console.log(newParagraph);
/// Output: "I think my dog is cuter than your dog!"

//# toUpperCase method
const capitalStr = game.toUpperCase();
console.log(capitalStr); /// Output: COUNTER STIKE 2

//# toLowerCase method
const smallStr = game.toLowerCase();
console.log(smallStr); /// Output: counter stike 2

//# charAt method
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 14;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
/// Output: "The character at index 14 is n"

//# indexOf method
const sentences = 'The quick brown fox jumps over the lazy dog.';
console.log(sentences.indexOf('z'));
/// Output: 37

//# substring
const splitStr = 'The quick brown fox jumps over the lazy dog.';
console.log(splitStr.substring(0,11)); //@ remember start value will be included and end value is excluded  
/// Output: The quick b 

//# slice 
const sliceStr = 'oldest sunlight material long lunch else bottom sing plastic structure '
console.log(sliceStr.slice(1 ,15));
/// Output: ldest sunlight
console.log(sliceStr.slice(-15 ,-1));
/// Output: stic structure

//# trim 
//note: The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const name12 = "                                               nikhil                                "
console.log(name12);
/// Output:                                                nikhil
console.log(name12.trim());
/// Output: nikhil

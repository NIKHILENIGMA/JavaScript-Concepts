// @ Arrays

const myArr = [1, 2, 3, 4];

//note: The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// note: JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

const mix = ["string", 1, 155.5, true, undefined];

// note: JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
console.log(myArr["one"]); /// This is wrong syntax

console.log(myArr[2]); /// 2 correct syntax to access an array

//note: JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

//# What is deep copy?
//? A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//# What is deep copy?
//? A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

//$ Alternative way to declare array
const newArr = new Array(1, 2, 3, 4, 5, 6);
console.log(newArr[1]);

//@ Array Method

// # Push method
myArr.push(6);
myArr.push(7);
console.log(myArr);
/// Output: [ 1, 2, 3, 4, 6, 7 ]

// # Pop method
myArr.pop()
console.log(myArr);
/// Output: [ 1, 2, 3, 4, 6]

// # unshift method

myArr.unshift(7)
console.log(myArr);
/// Output: [7, 1, 2, 3, 4]

// # shift method
myArr.shift()
console.log(myArr);
/// Output: [1, 2, 3, 4]

// # includes method
console.log(myArr.includes(9));
/// Output false

// # indexOf method
console.log(myArr.indexOf(9))
/// Output -1

//# join method
const newArr2 = myArr.join()

console.log(newArr2); //String data type
console.log(myArr);



const mainArr = [0,1,2,3,4,5,6]

// # slice
// slice syntax : where start included and end excluded
// (mainArr.slice(start, end));
console.log(`My array before slice method ${mainArr}`);
/// Output: My array before slice method 0,1,2,3,4,5,6
console.log(`My array after slice method ${mainArr.slice(1,4)}`);
/// Output: My array after slice method 1,2,3,

//# splice method 
// splice syntax : mainArr.splice(start,end) where both start and end included but major differenc is mainArr excluded all the range values from it

console.log(`My array before splice method ${mainArr}`);
/// Output: My array after splice method 0,1,2,3,4,5,6
console.log(`My array after splice method ${mainArr.splice(1,4)}`);
/// Output: My array after splice method 1,2,3,4

console.log(`My array ${mainArr}`);
/// Output: My array 0,5,6

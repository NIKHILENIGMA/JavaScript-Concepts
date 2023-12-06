let name = "Nikhil";

let age = 18;

let isLoggedIn = false;

/// Primitive data type
// number => range (2 to power 53)
// bigInt
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value is not assign
// symbol => unique

/// Non-primitive data type (reference )
// Object
// Arrays
// Function

// console.log(typeof null); //? Output object
// console.log(typeof 123); //? Output number
// console.log(typeof "nikhil"); //? Output string
// console.log(typeof true); //? Output boolean
// console.log(typeof undefined); //? Output undefined
// console.log(typeof Symbol); //? Output function

//# Java script is a static or dynamic type language ??
/// 1. JavaScript is a dynamic and weakly typed language.
///@ 2. Dynamic Typing: This means that variable types are interpreted at runtime, not during the compilation phase. You can change the type of a variable during the execution of the program.
///? 3. Weak Typing: JavaScript is weakly typed, which means that variables can be coerced into different types implicitly. For example, you can perform operations on different types of variables without explicitly converting them.
///$ 4. Contrast this with statically typed languages, where variable types are checked at compile-time, and once a variable is declared with a certain type, it cannot change.

///+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

//@ The stack is primarily used for managing function calls and local variables with automatic memory management
let value = "Nikhil";
console.log(value); /// Output: Nikhil

let valueNum = Number(value);

console.log(valueNum);/// Output: NaN
console.log(value);/// Output: Nikhil
//note: In stack we don't get any access of the reference instead we get a copy and all the changes get executed on that copy section

//@ The heap is used for dynamic memory allocation, especially for objects and data with longer lifetimes
let obj = {
    email: "myobj@gmail.com",
    password: "Obj@465",
    Id: "AdyoUGl6wXM2YXw"

}

let newObj = obj

newObj.email = "nikhil@gmail.com"

console.log(newObj);
// {
//     email: 'nikhil@gmail.com',
//     password: 'Obj@465',
//     Id: 'AdyoUGl6wXM2YXw'
//   }
  console.log(obj);
//   {
//     email: 'nikhil@gmail.com',
//     password: 'Obj@465',
//     Id: 'AdyoUGl6wXM2YXw'
//   }

//note: In Heap we get any access of the reference so all the changes get executed on the same reference

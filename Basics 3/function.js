// @ Functions

//note: The Function object provides methods for functions. In JavaScript, every function is actually a Function object.
//$ Example
function nameOf(person) {
  //? Here person is parameter
  console.log(`hello ${person}`);
}

console.log(nameOf("sakshi")); //? Here nameof(arg)

// # Function length
//note: The length data property of a Function instance indicates the number of parameters expected by the function.
//note: A Function object's length property indicates how many arguments the function expects, i.e. the number of formal parameters.

const fn1 = function fun(a, b) {
  console.log("Hello world");
};

console.log(fn1.length); ///Output: 2

const fn2 = function fun2() {
  console.log("Hello world");
};

console.log(fn2.length); ///Output: 0
// console.log();

function myFunction(x, y, ...z) {
  console.log(`Value: ${x} and ${y}`);
  return x, y, z;
}

// Function reference as a variable
let funcRef = myFunction;

// Calling the function through the reference
funcRef(42, 45, 68, 23, 78, 65);

console.log(`parameter length is :${funcRef.length}`);

function userInfo(name) {
  const user = console.log(`Hello welcome back ${name}!`);
  return user;
}

// Passing argument value
userInfo("Nikhil"); ///Output: Hello welcome back Nikhil!

// Passing empty string
userInfo(""); ///Output: Hello welcome back !

// Passing no arguments
userInfo(); ///Output: Hello welcome back undefined!


//# Function with rest operator
const useRestOperator = function restOperator(...rest) {
    return rest;
}

console.log(useRestOperator(100,200,300,400,500,600,700,800));
///Output:[
///  100, 200, 300,
///  400, 500, 600,
///  700, 800
///]


let myArr = [100,150,200,520]

function handleArr(giveArr) {
    return giveArr;
}

console.log(handleArr(myArr)); 

const container = handleArr(myArr).map((value) => (value > 150));
console.log(container); /// Output: [ false, false, true, true ]

try {
    const container2 = handleArr(myArr).map((value) => (value + 15));
    const container3 = [...container2]

    for (const iterator of container3) {
        console.log(iterator);
    }
    /// Output: 115
    /// 165
    /// 215
    /// 535
    /// 115
    
} catch (error) {
    console.log(`Error message : ${error}`);
}
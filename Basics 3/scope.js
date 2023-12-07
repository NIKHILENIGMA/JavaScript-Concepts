// @ Scopes in JS
// var third = 300
let first = 230; /// Global scope
if (!true) {
  let first = 10;
  console.log(`Value inside block scope ${first}`); /// Block scope
  const second = 20;
  var third = 30;
}

//  console.log(`Value outside block scope: ${first}`);  //? first is not accessible outside block scope
// console.log(second); //? second is not accessible outside block scope
// console.log(third); //? third is accessible outside block scope

// @ Nested scope

function one() {
  const username = "Hitesh";

  function two() {
    const website = "youtube";
    console.log(` value inside two:${username}`);
  }
  // console.log(website);
  // two();
}

// one();

// ************************************Hositing *********************************************

try {
  console.log(addOne(2)); /// Output 3
  function addOne(num) {
    return num + 1;
  }

//note this function is called as expression
  console.log(addTwo(2)); /// Output Show error message :: ReferenceError: Cannot access 'addTwo' before initialization
  const addTwo = function addTwo(num) {
    return num + 2;
  };
} catch (error) {
  console.log(`Show error message :: ${error}`);
}

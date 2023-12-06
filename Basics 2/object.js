// singleton

//@ Object literals
const mySymb = Symbol("1234")

const user = {
    name: "Nikhil",
    age:22,
    [mySymb] : "key1",
    location: "Mumbai",
    email: "pefe@fapzujef.ne",
    lastLoginDays: ["Monday", "Saturday"]
}

// # Methods to access object are
// console.log(user.email); /// Output pefe@fapzujef.ne

// console.log(user["email"]); /// Output pefe@fapzujef.ne
// console.log(user[mySymb]); /// Output key1

user.greeting = function() {
    console.log("Hello greetings");
}

user.greeting2 = function greeting() {
    console.log(`Hello! ${this.name} greetings`);
}

console.log(user.greeting()); ///Output Hello greetings
console.log(user.greeting2());///Output Hello! Nikhil greetings


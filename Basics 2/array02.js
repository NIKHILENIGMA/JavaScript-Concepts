const marvel = ["ironman", "captain america ", "spiderman"]

const dc = ["superman", "batman","wonder women"]

marvel.push(dc)
const all_heros = marvel.concat(dc)
console.log(all_heros);

let spread = {...all_hero}; //spread operator 

const all_hero = [...marvel,...dc]

// console.log(all_hero);

console.log(Array.isArray("Nikhil")); ///Output false
console.log(Array.from("Nikhil")); ///Output [ 'N', 'i', 'k', 'h', 'i', 'l' ]
const obj = Array.from({name:"Nikhil"})
console.log(obj); ///Output []


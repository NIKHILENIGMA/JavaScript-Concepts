const nums = [1,2,3,4,5];
// @ reduce in normal function
const total = nums.reduce(function (acc, curr) {
    return acc + curr
},0)

// console.log(total);

// @ reduce in arrow function
const total2 = nums.reduce((acc, current) => acc+current, 0)
console.log(total2);

const shoppingCard = [
    {
        itemName: "Js course",
        price: 2999
    },
    {
        itemName: "Java course",
        price: 4999
    },
    {
        itemName: "Data science course",
        price: 999
    },
    {
        itemName: "Python course",
        price: 2299
    },
]

const totalValue = shoppingCard.reduce((acc,items)=> (acc + items.price),0)
console.log(totalValue);

let sum = (a,b,c,d) => (a + b + c + d)
console.log(sum(2999,4999,2299,999));
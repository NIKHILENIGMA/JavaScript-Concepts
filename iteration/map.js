// @ Map method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.map((nums) => nums + 10);

// # Chaining method
const newNums = myNums
                .map((nums) => nums * 10)
                .map((nums)=> nums + 1)
                .filter((nums) => nums >= 40);

console.log(newNums); 
/// Output [
///     11, 12, 13, 14, 15,
///     16, 17, 18, 19
///   ]
///   

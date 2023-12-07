//note forEach loop does not return any value

//$ Example:

const coding = ["js", "python", "java", "cpp", "c#", "go", "ruby", "swift"];

const languages = coding.forEach((items) => {
  return items;
});

// console.log(languages); /// Output: undefined

//@ Filters
// note: filter return actual values which can hold by variables
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter without curly braces
const varFilter = myNums.filter((num) => num > 4);
// console.log(varFilter);

// filter with curly braces
const variFilter = myNums.filter((num) => {
  let filter = num > 4;
  return filter;
});
// console.log(variFilter);

// $ Example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
//   $ Task one all the book who genre is history:

let userBooks = books.filter((bk) => bk.genre === "History");
//   console.log(userBooks);

/// Output:
/// [
///     {
///       title: 'Book Three',
///       genre: 'History',
///       publish: 1999,
///       edition: 2007
///     },
///     {
///       title: 'Book Seven',
///       genre: 'History',
///       publish: 1986,
///       edition: 1996
///     }
///   ]
///

// $ Task two bring all the books who are published after 2000
const userBookPublished = books.filter((bk) => bk.publish >= 2000);
// console.log(userBookPublished);
///Output:
/// [
///     {
///       title: 'Book Five',
///       genre: 'Science',
///       publish: 2009,
///       edition: 2014
///     },
///     {
///       title: 'Book Eight',
///       genre: 'Science',
///       publish: 2011,
///       edition: 2016
///     }
///   ]

// $ Task three bring all those book which are published after 1995 and genre is History
let subCategory = books.filter( (bk) => {
     return bk.genre === "History" && bk.publish > 1995
    });
  console.log(subCategory);

///Output : 
/// [
///     {
///       title: 'Book Three',
///       genre: 'History',
///       publish: 1999,
///       edition: 2007
///     }
///   ]
  

const varMap = myNums.map((num) => num > 5);
// console.log(varMap);

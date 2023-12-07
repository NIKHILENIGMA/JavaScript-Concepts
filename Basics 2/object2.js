//@ Construct object

const tinderUser = new Object();

tinderUser.Id = "CT8RBERqcF7A2pdjoQX";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); /// Output { Id: 'CT8RBERqcF7A2pdjoQX', name: 'sammy', isLoggedIn: false }

const instaUser = {
  email: "fa@ocedev.ws",
  fullname: {
    userName: {
      firstName: "Nikhil",
      lastName: "Harmalkar",
    },
  },
};
console.log(instaUser);
/// Output : {
///   email: 'fa@ocedev.ws',
///   fullname: { userName: { firstName: 'Nikhil', lastName: 'Harmalkar' } }
/// }
console.log(instaUser.fullname); /// Output { userName: { firstName: 'Nikhil', lastName: 'Harmalkar' } }
console.log(instaUser.fullname.userName.firstName); ///Output Nikhil

const obj1 = { 1: "Nora", 2: "Kevin" };
const obj2 = { 3: "Todd", 4: "Lloyd" };

const obj3 = { 5: "Kenneth", 6: "Chris" };

// # Multiple object inside single object
//@ Method 1
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

// @ Method 2
const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

const user = [
  {
    Id: "vSfTRx4CmM",
    name: "Ricardo",
  },
  {
    Id: "kccZebap",
    name: "George",
  },
  {
    Id: "5qeDs2q79MFQWr9j6P",
    name: "Johanna",
  },
  {
    Id: "zDuUkQRMBqKXsq7bFo9q",
    name: "Troy",
  },
  {
    Id: "QMt3T2sFzfB",
    name: "Kate",
  },
];

console.log(user[1].Id);
///Output: kccZebap

console.log(tinderUser);
///Output: { Id: 'CT8RBERqcF7A2pdjoQX', name: 'sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser));
///Output:[ 'Id', 'name', 'isLoggedIn' ]
// note: Using keys we can collect all the keys and put into the array so we can run loops on it to get access of each key

console.log(Object.values(tinderUser));
///Output: [ 'CT8RBERqcF7A2pdjoQX', 'sammy', false ]

console.log(Object.entries(tinderUser));
///Output: [
///  [ 'Id', 'CT8RBERqcF7A2pdjoQX' ],
///  [ 'name', 'sammy' ],
///  [ 'isLoggedIn', false ]
/// ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); ///Output: true

//$ Example
const course = {
  coursename: "js in hindi",
  price: "6666",
  courseInstructor: "Cecilia"
} 

const{courseInstructor : instructor} = course 
//  const {value you want} = from that object
//note: you can hold a value inside variable from object 

console.log(instructor); ///Output: Cecilia


const user = {
  username: "Martin",
  password: "8xcbqC6vfPIC9s",
  signedIn: true,

  getUserDetails: function (username) {
    console.log(`Hello ${this.username} Welcome to zomato`);
    console.log(this);
},
};

//note: Without this keyword
// console.log(user.getUserDetails()); /// Output Hello undefined Welcome to zomato

//note: Without this keyword
// console.log(user.getUserDetails()); /// Output Hello Martin Welcome to zomato

/// console.log(this); Output
/// {
///   username: 'Martin',
///   password: '8xcbqC6vfPIC9s',
///   signedIn: true,
///   getUserDetails: [Function: getUserDetails]
/// } 

function User(username, loginCount, isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    return this
}

// const userOne = User("nikhil",12,true)
// console.log(userOne);

//note return this result 
///   },
///   fetch: [AsyncFunction: fetch],
///   username: 'nikhil',
///   loginCount: 12,
///   isloggedIn: true
/// }

// const userTwo = User("navam", 45, false)
// console.log(userTwo);

//note userTwo just over ride userOne data if don't use new instance
/// },
/// fetch: [AsyncFunction: fetch],
/// username: 'navam',
/// loginCount: 45,
/// isloggedIn: false
/// }

// To avoid this problem we use new 

const userOne = new User("Nikhil", 12,true);
console.log(userOne); /// Output: User { username: 'Nikhil', loginCount: 12, isloggedIn: true }


const userTwo = new User("Esther", 12 ,false);
console.log(userTwo); /// Output: User { username: 'Esther', loginCount: 12, isloggedIn: false }
//@ Declare const variable we use const 
const accountId = 14452 

//@ Declare a variable we can use Let or const key word
let accountEmail = "emold@gmail.com"

var accountPassword = "21354"




try {
    // accountId = 2 ///Error message TypeError: Assignment to constant variable.
    console.table([accountId, accountEmail, accountPassword, accountCity, accountName]);
    
} catch (error) {
    console.log(`Error message ${error}`);
    
}
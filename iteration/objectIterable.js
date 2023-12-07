// # forin loop on object

const myObj = {
  js: "Java Script",
  py: "Python",
  java: "Java",
  go: "Go Lang",
};

for (const key in myObj) {
  // console.log(`${key} shortcut is for ${myObj[key]}`)
}
/// Output :
/// js shortcut is for Java Script
/// py shortcut is for Python
/// java shortcut is for Java
/// go shortcut is for Go Lang

//# forin loop on arrays

const arry1 = ["js", "py", "cpp", "java", "go"];

for (const key in arry1) {
    //   console.log(`Array keys: ${key} =>${arry[key]} `);
}
/// Output:
/// Array keys: 0 =>js
/// Array keys: 1 =>py
/// Array keys: 2 =>cpp
/// Array keys: 3 =>java
/// Array keys: 4 =>go

//# forin loop on map
const map = new Map()

map.set("Macau SAR China", "MSC");
map.set("Ascension Island","AI");
map.set("Samoa","SAM");

for (const key in map) {
    // console.log(key);
    /// map are non-iterable
    
}

const arry2 = ["js", "py", "cpp", "java", "go"];

//# forEach loop on arrays
// arry2.forEach( function(item){
//     console.log(item);
// } )
/// Output: 
/// js
/// py
/// cpp
/// java
/// go

// arry2.forEach(element => {
//     console.log(element);
// });
/// js
/// py
/// cpp
/// java
/// go

function printMe(arry2) {
    console.log(arry2);
}

// arry2.forEach(printMe) //note function reference
/// Output: 
/// js
/// py
/// cpp
/// java
/// go

const data = [
    {
        languageName: "JS",
        languageFileExtension: ".js",
    },
    {
        languageName: "Python",
        languageFileExtension: ".py",
    },
    {
        languageName: "JAVA",
        languageFileExtension: ".java",
    },
    {
        languageName: "Go",
        languageFileExtension: ".go",
    },
]

data.forEach((names) => {
    console.log(names.languageName,names.languageFileExtension );
    
})
/// JS .js
/// Python .py
/// JAVA .java
/// Go .go
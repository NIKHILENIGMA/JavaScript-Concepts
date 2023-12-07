// forLoop

for (let i = 1; i <= 10; i++) {
  const element = i;
//   console.log(element);
}

// @ for of loop

const arr = [
  "Fanny",
  "Ruth",
  "Edna",
  "Marie",
  "Annie",
  "Aiden",
  "Willie",
  "Winifred",
];

for (const value of arr) {
//   console.log(value);
}

// @ Maps
const map = new Map()

map.set("Macau SAR China", "MSC");
map.set("Ascension Island","AI");
map.set("Samoa","SAM");
map.set("Turks & Caicos Islands","TCI");
map.set("Lithuania", "LTA");
map.set("U.S. Virgin Islands", "USVI");

// console.log(map);
/// Output:
///Map(6) {
///   'Macau SAR China' => 'MSC',
///   'Ascension Island' => 'AI',
///   'Samoa' => 'SAM',
///   'Turks & Caicos Islands' => 'TCI',
///   'Lithuania' => 'LTA',
///   'U.S. Virgin Islands' => 'USVI'
/// }

//# forOf Loop on map function
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}
///Output:
/// Macau SAR China :- MSC
/// Ascension Island :- AI
/// Samoa :- SAM
/// Turks & Caicos Islands :- TCI
/// Lithuania :- LTA
/// U.S. Virgin Islands :- USVI

// console.log(typeof map); ///Output: object

//# forOf Loop on object

try {
    const object = {
        "game1": "NFS",
        "game2": "Counter Strike",
        "game3": "Valorant"
    }
    
    for (const [key, value] of object) {
        // console.log(`${key} :- ${value}`);
    }

} catch (error) {
    // console.log(`Error message :: ${error}`);
    //note: Error message :: TypeError: object is not iterable
}


try {
    const object = {
        game1: "NFS",
        game2: "Counter Strike",
        game3: "Valorant"
    }
    
    for (const [key, value] of object) {
        console.log(`${key} :- ${value}`);
    }

} catch (error) {
    console.log(`Error message :: ${error}`);
    //note: Error message :: TypeError: object is not iterable
}





//@ Number conversion

try {
  //# Conversion of different datatype to Number datatype

  let value1 = "sting"; //? Convert string to number
  let conversionValue1 = Number(value1);
  console.log(`Converted value 1: ${conversionValue1}`); /// Output: Converted value: NaN
  console.log(`Data type is: "${typeof conversionValue1}"`); /// Output: Data type is: "number"

  let value2 = "45"; //? Convert string to number
  let conversionValue2 = Number(value2);
  console.log(`Converted value 2: ${conversionValue2}`); /// Output: Converted value: 45
  console.log(`Data type is: "${typeof conversionValue2}"`); /// Output: Data type is: "number"

  let value3 = true; //? Convert boolean to number
  let conversionValue3 = Number(value3);
  console.log(`Converted value 3: ${conversionValue3}`); /// Output: Converted value: 1
  console.log(`Data type is: "${typeof conversionValue3}"`); /// Output: Data type is: "number"

  // note: boolean true => 1, false => 0

  let value4 = null; //? Convert null to number
  let conversionValue4 = Number(value4);
  console.log(`Converted value 4: ${conversionValue4}`); /// Output: Converted value: 0
  console.log(`Data type is: "${typeof conversionValue4}"`); /// Output: Data type is: "number"

  let value5 = undefined; //? Convert null to number
  let conversionValue5 = Number(value5);
  console.log(`Converted value 5: ${conversionValue5}`); /// Output: Converted value: NaN (Not a Number)
  console.log(`Data type is: "${typeof conversionValue5}"`); /// Output: Data type is: "number"

  //# Conversion of different datatype to String datatype

  let value6 = 45563; //? Convert number to string
  let conversionValue6 = String(value6);
  console.log(`Converted value 6: ${conversionValue6}`); /// Output: Converted value 45563
  console.log(`Data type is: "${typeof conversionValue6}"`); /// Output: Data type is: "string"

  let value7 = true; //? Convert boolean to string
  let conversionValue7 = String(value7);
  console.log(`Converted value 7: ${conversionValue7}`); /// Output: Converted value true
  console.log(`Data type is: "${typeof conversionValue7}"`); /// Output: Data type is: "string"

  let value8 = null; //? Convert number to string
  let conversionValue8 = String(value8);
  console.log(`Converted value 8: ${conversionValue8}`); /// Output: Converted value null
  console.log(`Data type is: "${typeof conversionValue8}" `); /// Output: Data type is: "string"

  let value9 = undefined; //? Convert number to string
  let conversionValue9 = String(value9);
  console.log(`Converted value 9: ${conversionValue9}`); /// Output: Converted value undefined
  console.log(`Data type is: "${typeof conversionValue9}"`); /// Output: Data type is: "string"

  //# Conversion of different datatype to String datatype
  let value10 = 45563; //? Convert number to boolean
  let conversionValue10 = Boolean(value10);
  console.log(`Converted value 10: ${conversionValue10}`); /// Output: Converted value true
  console.log(`Data type is: "${typeof conversionValue10}"`); /// Output: Data type is: "boolean"

  let value11 = true; //? Convert string to boolean
  let conversionValue11 = Boolean(value11);
  console.log(`Converted value 11: ${conversionValue11}`); /// Output: Converted value true
  console.log(`Data type is: "${typeof conversionValue11}"`); /// Output: Data type is: "boolean"

  let value12 = null; //? Convert null to boolean
  let conversionValue12 = Boolean(value12);
  console.log(`Converted value 12: ${conversionValue12}`); /// Output: Converted value false
  console.log(`Data type is: "${typeof conversionValue12}" `); /// Output: Data type is: "boolean"

  let value13 = undefined; //? Convert undefined to boolean
  let conversionValue13 = Boolean(value13);
  console.log(`Converted value 13: ${conversionValue13}`); /// Output: Converted value false
  console.log(`Data type is: "${typeof conversionValue13}"`); /// Output: Data type is: "boolean"

  console.log(faalse);
} catch (error) {
  console.log(`Error message ${error}`);
}


// ***************************************** Operations***********************************************

// Tricky thing in JS

console.log(2 + 3 + Number("2"));
console.log("2" + 2 + 2);
console.log(45 + 2 + "4");
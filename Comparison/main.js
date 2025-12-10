// Relational Operator
// <, >, <=, >=, !=, ==

console.log("2" > 1); // value will come true as "2" is converted to number before comparison

console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Here == gives false but >= gives true output, because in equality check null is not converted to Number but in comparison >, <, >=, <= null is converted to number 

// Strictly equals (===)

console.log("2" == 2); // true -> Here it only checks the value but not datatype
console.log("2" === 2); // false -> Here it also checks the datatype




const score = 400
console.log(score)

const balance = new Number(400)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(2)) // Returns a String value

const cost = new Number(123.8998)
console.log(cost.toPrecision(3)); // Returns a string value

const anotherNumber = 100000
console.log(anotherNumber.toLocaleString('en-IN'));

// Max value
let max_val = Number.MAX_VALUE
// Min Value
let min_val = Number.MIN_VALUE


// Math library
console.log(Math.abs(-9));
console.log(Math.round(4.5));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.pow(2,3));
console.log(Math.min(1,2,3,5,0));
console.log(Math.max(9,4,10,100));


const uuid = Math.round((Math.random() * 10)) + 1
console.log(uuid);

// Formula to generate a random value in range (Max - Min + 1) --> +1 to avoid 0 case
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);












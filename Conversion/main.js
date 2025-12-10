// Converting datatypes

let score = "46" 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score) 
console.log(valueInNumber); 

let num = undefined

console.log(Number(num)); // Here we provide a string value but converting it to Number so the result will become a NaN(Not a Number)

// "33abc" => NaN
// null => 0 --> Null converts to 0 when we convert it into Number
// undefined => NaN
// true => 1; false => 0
// "suparno" => NaN

let isLoggedIn = 1 // 1 -> true; 0 -> false
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// Falsy values -> "" , 0, undefined, null
// Truthy values -> "suparno" (any non empty string), 1 to any number except 0


let stringNumber = 33
let convertedNum = String(stringNumber)
console.log(convertedNum);




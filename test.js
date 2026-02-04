const mySym = Symbol("Batman")

const myObj = {
    [mySym] : "Hello World"
}
console.log(myObj[mySym])
console.log(typeof myObj);

console.log('a' <= 0); // During Comparison values are type casted in JS and then compared
console.log(null == 0); // false

let myAccountBalance = "32000abcs-def"
let bonus = 10000
let totalComp = Number(myAccountBalance) + bonus
console.log(typeof totalComp);
 
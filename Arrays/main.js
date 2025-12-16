// Declaring an Array
let arr = [1,2,3,4,'my name',true]
console.log(arr)
console.log(arr[3]);

const marvel = ['Spider-man',"Thor","Dr Strange"]
console.log(marvel[0]);

const arr2 = new Array(1,2,3,4,5)


// Array methods
const myArr = [1,2,3,4,5,6,7] 
console.log(myArr.length);
myArr.push(5) // add from end
console.log(myArr);
myArr.pop() // remove from end and return the value

myArr.unshift(10) // Adds element at the 0th index of array and shifts all other elements to right of array
console.log(myArr);
myArr.shift() // Removes the 0th element from array and shifts the array elems to left
console.log(myArr.includes(3)); // Returns a boolean value
console.log(myArr.indexOf(9)); // If not exists it will return -1
console.log(myArr.lastIndexOf(2));


const joinedArr = myArr.join() // Converts the array into a string
console.log(joinedArr);


// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);

// VVI: In slice the last index is excluded and original array is not changed, but in splice it includes the last index and also changes the original array

const marvel_heroes = ["thor","iron-man","spider-man"]
const dc_heroes = ["bat-man","superman","flash"]
// marvel_heroes.push(dc_heroes)
      
// concat method
const merged = marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
console.log(merged);

// spread operator
const all_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_heroes);

const twoDArray = [1,2,3,[4,5,6],7,8,[8,[9,10,11]]]
const real_two_D_Array = twoDArray.flat(Infinity)
console.log(real_two_D_Array);


// To check if any data is Array
console.log(Array.isArray("Suparno"));
// To convert a data into Array --> from() creates a new array from an iterable object like String
const new_arr = Array.from("1,2,3,4,5")
console.log(new_arr) 

let score1 = 100
let score2 = 200
let score3 = 300
// of() creates an new array from a set of elements
console.log(Array.of(score1,score2,score3))








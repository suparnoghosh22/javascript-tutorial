function greet() {
    console.log("Hello World");
}
greet()

function addTwoNums(num1,num2) {
    return num1 + num2
}
console.log(addTwoNums(1,2))

const loginUserMessage = function(username) {
    if(username === undefined) {
        console.log("Please provide a username");
        return
    }
    return `${username} just logged in`
} 

console.log((loginUserMessage())) // If we do not pass any argument in a function that accepts a parameter, then that parameter is by default treated as undefined
console.log(loginUserMessage("John"));

// Default parameters in a function
const cube = function(a = 1,b = 1,c = 1) {
    return a * b * c
}
console.log(cube());

// Rest operator // We use Rest Operator in a function parameter to pass variable length arguments
// The parameter accepts an array of values
const calculateCartPrice = (...nums) => {
    let result = 0
    for(let i=0;i<nums.length;i++) {
        result += nums[i]
    }
    return result
}

console.log(calculateCartPrice(1,200,34.56));

// Create a function that accepts two arguments, and a varliable length argument
function calc(val1,val2,...nums) {
    console.log(`${val1}  ${val2}  ${nums}`);
}
calc(20,30,40,50,60)

const user = {
    username: "Suparno",
    age: 26
}

const handleObject = (user) => {
    console.log(`Username is ${user.username} and age is ${user?.age}`); // Here ? is used if age property is not available, so here age will become undefined
}
handleObject(user)


// Arrow Keyword and this
// this refers to the current context

const users = {
    username: "Suparno",
    price: 999,
    welcome: function(){
        console.log(`Hello ${this.username}`)
        console.log(this) // Here this refers to users object, i.e. current object
        
    }
}

users.welcome()
users.username = "sam"
users.welcome()
console.log(this) // Here this refers to the node environment's context, it will return an empty object
// But in browser context this refers to Window Object

function one() {
    const username = "John"
    console.log(this) // Inside a function this refers to the global object
    // console.log(this.username) --> It will return undefined, we cannot access values in a function using this
}
one()

const two = () => {
    console.log(this) // Here this refers to the Node Env
}
two()

// Implicit return
// If we use {} we have to specify the return keyword, but if we want to return in one line either we dont use {} or we use () instead 
const three = (num1,num2) => num1 + num2
const myObj = () => ({name: "Suparno"})

console.log(three(3,4))
console.log(myObj())


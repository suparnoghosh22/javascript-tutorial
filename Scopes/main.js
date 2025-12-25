// Scopes

// Global Scope
let a = 10
const b = 20
var c = 300

// Let and Const are block scope variables where as var is global scope
// That means if we redeclare any variable with var in a block scope, it will also change the value at global scope
// But the problem is not present if we use let or const, const will not let us redclare any variable be it global or local scope

if (true){
    // block scope / function scope
    let a = 100
    var c = 56
    console.log(a);
}
console.log(`${a} ${b} ${c}`)

// Nested Scope

function one() {
    const username = "Suparno"
    // Lexical Scope --> Child can access all properties of a parent
    function two() {
        const profession = "SDE"
        console.log(`${username} is a ${profession}`)
    }
    two()
}
one()

if(true) {
    const username = "John"
    if(username === "John") {
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // --> We cannot access website variable here, since it is not available in this scope
    // Hence it will show as not defined
}


// Function Hoisting

addOne(5) // If we declare function normally, we can call a function before its declaration
// This is known as Hoisting in JS
function addOne(num) {
    return num + 1
}

const addtwo = function(nums) {
    return nums + 1
}
addtwo(5) // But if we declare a function as an expression we cannot call it before declaration, it will throw an error



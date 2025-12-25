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






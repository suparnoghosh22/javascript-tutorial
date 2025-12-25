// Immediately Invoked Function Expression
// Need : Sometimes we have some database connection, that we want to execute immediately as soon as our app runs
// Also, we use IIFE to protect from Global Scope pollution, sometimes Globally decalred variables can pollute the variables inside our function scope

// (function addOne() {
//     console.log("Func One")
// })()

// (() => {
//     console.log("Func Two")
// })()

// Now the above code will throw an error, because when we declare an IIFE the context of the previous IIFE has not ended
// To overcome this problem we have to use ; after IIFE declaration

// Named IIFE
(function addOne() {
    console.log("Func One")
})();

// Unnamed IIFE, Passing argument in a IIFE  
((username) => {
    console.log("Func Two" + username)
})("Suparno");
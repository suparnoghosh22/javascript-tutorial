// if else statement

if (true) {
    console.log("Hello World");
}

let val1 = 10;
let val2 = 4;

if(val1 < val2) {
    console.log("False");
}else {
    console.log("True");
}

const is_uer_logged_in = !true; // Negation operator '!'
if(is_uer_logged_in) {
    console.log("User logged in");
}else {
    console.log("User has signed out");
}

// IMP -> == checks only values not datatype, but Strict equals === checks datatype as well, similarly we have Strict not equals
// !==
if (2 == "2") {
    console.log("True");
}else {
    console.log("False");
}

if(2 === "2") {
    console.log("True");
}else {
    console.log("False");
}

// if- else- else if
let balance = 1000;

if (balance < 500) {
    console.log("Less than 500");
}else if(balance >= 2000) {
    console.log("Greater than 2000");
}else {
    console.log("1000");
}

// One liner if 
if (true) console.log("M"),console.log("N");

// Ternary operator
let myVal = 10 > 5 ? 11 : 20;
console.log(myVal);


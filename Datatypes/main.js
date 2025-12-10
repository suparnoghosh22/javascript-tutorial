"use strict"; // treat all JS code as newer version

 // number
 // bigint
 // string
 // boolean => true/false
 // null => empty value(Standalone value)
 // undefined => No value assigned
 // symbol => to define unique values
 // object

console.log(typeof 23); // typeof value -> To determine the datatype of a value
console.log(typeof undefined); // It is a undefined type
console.log(typeof null); // In JS null is defined as an object type

// Primitive Datatype
// 7 types (Call by value): Number, String, Boolean, null, undefined, Symbol, Bigint

// Reference type (Non Primitive)
// Array, Objects, Functions

//Symbol
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

// Big Int
const bigNumber = 25837507253009235n 

// Arrays
let heroes = ["Superman","Spider-man","Batman"]

// Objects
let myDetails = {
    name: "Suparno",
    age: 23,
    address: ["Kolkata","West Bengal"]
}

// Function
const myFunc = function() {
    console.log("Hello World")
}

myFunc()

 
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

// Stack (Stores Primitive types and references) , Heap (Stores Objects)

let myName = "Suparno"
let myAnotherName = myName // Here only the value of myName is copied not the memory reference, so any change in either myName or myAnotherName will not affect either ones
myName = "Tubai"
myAnotherName = "john"

console.log(myAnotherName)
console.log(myName)

// Here since it's copy by reference so any change in original value will change the entire value
let userOne = {
    email: "user@google.com",
    upi: "user@oksbi"
}

let userTwo = userOne

userTwo.email = "sup@google.com"

console.log(userOne.email)
console.log(userTwo.email)



// Date is an object in JavaScript
let date = new Date()
console.log(date.toString()) 
console.log(date.toLocaleString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.getTime())

// In JS date start drom 0 and ends at 11, Jan - 0 and Dec - 11
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())


let dateinMilliSec = Date.now() // This will give the time in millisec from 1 Jan 1970 to current
console.log(dateinMilliSec)
console.log(Math.floor(Date.now()/1000)); // Convert into seconds
console.log(myCreatedDate.getTime()) // Returns the time in milliseconds 

console.log(myCreatedDate.toLocaleString('default',{
    weekday: "long"
}))















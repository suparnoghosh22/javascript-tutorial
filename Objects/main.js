// Singleton Object --> Created using Object Constructor
const facebookUser = new Object()
facebookUser.id = "123dbc"
facebookUser.name = "Mark Zuckerberg"
facebookUser.isLoggedIn = false
console.log(facebookUser);

const tinderUser = {
    id: "7890934",
    fullname: {
        username:{
            firstname: "Hugo",
            lastname: "Boss"
        }
    },
    greet() {
        console.log(`Hello ${this.fullname["username"].firstname} ${this.fullname["username"].lastname}`);  
    }
}
tinderUser.greet()
console.log(tinderUser.fullname);
console.log(tinderUser.fullname["username"].firstname);


// Combine two objects
const o1 = {a:1,b:2}
const o2 = {c:4,d:5}
// const new_obj = Object.assign({},o1,o2) 
const new_obj = {...o1,...o2}

const users = [
    {
        name: "Suparno"
    },
    {
        name: "John"
    },
    {},
    {}
]

console.log(users[2].name);



// Object Literal
const user = {
    first_name: "Suparno",
    last_name: "Ghosh",
    age: 23,
    "lastUpdatedAt": "22-04-2023",
    isLoggedIn: true,
    skills: ["Java","JavaScript","C++","C#"]
}
console.log(user);

console.log(user["last_name"]);
console.log(user.first_name);
console.log(user["lastUpdatedAt"]);

user.last_name = "ghosh"
console.log(user);

// To make an object constant i.e. non changeable
Object.freeze(user)
user.first_name = "suparno"
console.log(user);


// Create a Symbol and use it as a key in Object
const newSym = Symbol("Key1")

const obj1 = {
    [newSym]: "Data"
}
console.log(obj1[newSym]);
console.log(obj1);



const obj2 = {
    name: "John",
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}
obj2.print = function() {
    console.log("Print");
}

obj2.greet()
console.log((obj2.print))
obj2.print()

// get keys and values from an array

console.log(Object.keys(obj2)); // Returns an array of keys
console.log(Object.values(obj2)); // Return an array of values
console.log(Object.entries(obj2)); // Returns an array of array of key, value pair

// To check if object contains the property
console.log(obj2.hasOwnProperty('name'));




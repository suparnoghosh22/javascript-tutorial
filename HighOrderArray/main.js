// for of loop => It cannot iterate on Object Literals
const objectArray = [1,2,3,4,5]
const users = [
    {
        name: "Suparno"
    },
    {
        name: "John"
    }
]

for (const element of users) {
    console.log(element["name"]);
}

// Map -> Holds unique keys whereas Objects do not hold unique keys
const countries = new Map();
countries.set("IN","India");
countries.set("US","United States");
countries.set("FR","France");

console.log(countries.get("IN")); 

for (const [key,value] of countries) {
    // console.log(key); // --> This will return key, value pair in an array
    console.log(`${key}  => ${value}`);
} 

// for in loop => Returns the Keys in case of Objects, whereas in case of Arrays returns the Indexes
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby"
}

for (let obj in myObject) {
    console.log(myObject[obj]);
}


// forEach loop
const coding = ['js','ruby','java','python'];

coding.forEach((elem) => {
    console.log(elem);
}); 

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // As a function parameter


coding.forEach((item,index,coding) => {
    console.log(`${item} ${index} ${coding}`);
});

users.forEach((item) => {
    console.log(item.name);
});

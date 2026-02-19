let productDetailsMapping = new Map();

productDetailsMapping.set("Mobile",12987);
productDetailsMapping.set("Food",112343564);
productDetailsMapping.set("Decor",90000);

for (let [item,amount] of productDetailsMapping) {
    console.log(`${item} has ${amount} in stock`);
}

let userDetails = {
    username: "admin",
    password: "admin@123",
    age: 34,
    isLoggedIn: true
}

for (let details in userDetails) {
    console.log(userDetails[details]);
}
console.log(Object.keys(userDetails))

let mySymbol = Symbol("New Symbol");

let myObj = {
    [mySymbol]: {
        username: "admin"
    }
}
console.log(myObj[mySymbol]);

(function one(){
    console.log("Inside IIFE");
})();

const shoppingCartDetails = [
    {
        "price": 1100
    },
    {
        "price": 1200
    },
    {
        "price": 1200
    }
];

let totalPrice = shoppingCartDetails.reduce((accumulator,currentValue) => {
   return accumulator + currentValue["price"];
},0);
console.log(totalPrice);


// Map, Filter, Reduce

// forEach loop in JS does not return any value implicit or explicit 
// it return undefined

const nums = [1,2,3,3,5];

const values = nums.forEach((i) => {
    console.log(i);
    return i; // Here it will still return undefined
});

console.log(values);

 // Filter -> Returns an array of values based on condition
const newValues = nums.filter((num) => num > 2);
console.log(newValues);

const vals = []
nums.forEach((num) => {
    if(num > 2) {
        vals.push(num);
    }
});
console.log(vals);

const books = [
    {title: "Book One", genre: "Fiction", published: 1990},
    {title: "Book Two", genre: "Science", published: 2026},
    {title: "Book Three", genre: "Coding", published: 1991},
    {title: "Book Four", genre: "Coding", published: 1991},
    {title: "Book Five", genre: "Non Fiction", published: 1992},
    {title: "Book Seven", genre: "History", published: 1990},
]

const filteredBooks = books.filter((condition) => condition.published === 1990 && condition.genre === "History");
console.log(filteredBooks);

// map -> Returns value in a new array

const numbers = [1,2,3,4,5,6,7,8,9,10]

const mynums = numbers.map((num) => num + 10);

// method chaining
const myVal = numbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num > 41);
console.log(myVal);

// reduce -> The callback takes two parameters (Accumulator,CurrentValue) and an Initial Value
// We need to give the accumulator an initial starting value
let noOfUsers = [1,2,3];
let initialValue = 0;

const totalUsers = noOfUsers.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},initialValue);

console.log(totalUsers);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999.98
    },
    {
        itemName: "py course",
        price: 2999.98
    },
    {
        itemName: "rb course",
        price: 14568.90
    },
]

function getTotalCartPrice(shoppingCartItems) {
    let totalPrice = shoppingCartItems.reduce((accumulator,currentCart) => {
        return accumulator + currentCart.price;
    },0);
    return Math.round(totalPrice);
}

console.log(getTotalCartPrice(shoppingCart));

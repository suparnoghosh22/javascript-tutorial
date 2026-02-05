// Map, Filter, Reduce

// forEach loop in JS does not return any value implicit or explicit 
// it return undefined

const nums = [1,2,3,3,5];

const values = nums.forEach((i) => {
    console.log(i);
    return i;
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


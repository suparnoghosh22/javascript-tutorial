// Falsy values -> false, 0, -0, BigInt 0n, ""(Empty String), null, undefined, NaN
// Truthy value -> [],{},"0"," ",'false', function(){}

const myArr = []

if (myArr.length === 0) {
    console.log("Array is empty");
}

const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("Empty Object");
}


// Nullish Coalescing Operator (??): null undefined
// Type checking for null/undefined
function dataFromServer() {
    return null;
}

const val = dataFromServer() ?? 11;
console.log(val);

const val2 = null ?? 10 ?? 10; // chooses the first non null value
console.log(val2);



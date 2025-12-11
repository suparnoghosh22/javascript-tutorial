const name = "Suparno"
const repoCount = 30

// String interpolation
const sentence = `${name} has a total repo count of ${repoCount}`
console.log(sentence)

const laptopModel = new String("Acer Predator")

console.log(laptopModel.endsWith("r"));
console.log(laptopModel.charAt(7));
console.log(laptopModel[0]);
console.log(laptopModel.indexOf("t"));
console.log(laptopModel.length);
console.log(laptopModel.toUpperCase());

const substr = laptopModel.substring(0,4)
console.log(substr);

const newSubstr = laptopModel.slice(1,5)
console.log(newSubstr);

let url = "https://suparno.com/suparno%20ghosh"
console.log(url.replace("%20","-"));
console.log(url.includes("suparno"));

const arr = laptopModel.split(" ")
console.log(arr);










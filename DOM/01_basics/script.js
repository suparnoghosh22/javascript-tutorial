// To select element using id 
const h1 = document.getElementById('title');

// Access inner HTML of an element in DOM 
h1.innerHTML = "<h4>DOM</h4>";

// Change the class attribute 
h1.className = "title heading";

// Fetch the name of class attribute of an element
console.log(h1.getAttribute('class'));

// Add style using DOM Selector
h1.style.color = "black";
h1.style.background = "violet";
h1.style.borderRadius = "10px";
h1.style.padding = "5px";
h1.style.textAlign = "center";

// Set the class attribute of an element
h1.setAttribute('class','main div');

// Get the text content
console.log(h1.textContent);
console.log(h1.innerText);

// querySelector -> The querySelector method only returns the first occurence of a node in DOM
const div = document.querySelector("h1"); 
const h2 = document.querySelector("#second");
const h3 = document.querySelector(".third");


const unorderedList = document.querySelector("ul"); // --> Selects the entire unordered list
const listItem = document.querySelector("li") // --> Selects the first list item

// querySelectorAll -> Returns the NodeList of all the matched elements in DOM
const myLi = document.querySelectorAll("li");
// myLi[0].style.color = 'green';

myLi.forEach((item) => {
    item.style.color = 'pink';
});

// getElementsByClassName -> Return a HTMLCollection of all the matched elements in DOM based on class name
const getDocByClass = document.getElementsByClassName("list-item");
console.log(getDocByClass);
const convertedToArray = Array.from(getDocByClass);
convertedToArray.map((item,index) => {
    if(index%2 == 0) {
        item.style.background = "orange";
    }
});

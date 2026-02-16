const parentDiv = document.querySelector('.parent');

// To select the child nodes of a parent node
//We use the children property --> This returns a HTMLCollection(Array like)
console.log(parentDiv.children);
console.log(parentDiv.children[2].innerHTML);

for (let index = 0; index < parentDiv.children.length; index++) {
    console.log(parentDiv.children[index]);
}

parentDiv.children[0].style.color = 'orange';

console.log(parentDiv.firstElementChild); // -> returns the entire first child element
console.log(parentDiv.lastElementChild);

// To get parent element from child element
const childElement = document.querySelector('.day');
console.log(childElement.parentElement);
// To get the next sibling element of a child element
console.log(childElement.nextElementSibling);

console.log(parentDiv.childNodes);

// create a new element
const newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'new-div';
newDiv.id = 'new-div';
newDiv.setAttribute('title','new-title');
newDiv.style.color = "green";
// newDiv.innerHTML = "<h1>New Div</h1>";

// To create a new child node to hold text value
const textNode = document.createTextNode("New Div");
// insert the child node in our parent element
newDiv.appendChild(textNode);

// to attach the new element in the document
document.body.appendChild(newDiv);



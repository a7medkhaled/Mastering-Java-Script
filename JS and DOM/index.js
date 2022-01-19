//get element by id
const nameElm = document.getElementById("name");
console.log(nameElm);

/*
Selecting Multiple Elements At Once Recap
In this section, we learned two ways to select multiple DOM elements:

.getElementsByClassName()
.getElementsByTagName()
*/

const s = document.getElementsByTagName("p");

console.log(s);

/*
 Node interface 
it's the base class of all the nodes 
it's the blueprint of all nodes which 
compose of properties and methods 
 */

/* 
Element Interface
Just like the Node Interface, the Element Interface is a blueprint for creating elements: Element Interface on MDN

One really important thing about the Element Interface is that it is a descendent of the Node Interface.

 */

// find and return the element with an ID of "header"
document.querySelector("#header");

// find and return a list of elements with the class "header"
document.querySelectorAll(".header");

const allHeaders = document.querySelectorAll("p");

for (let i = 0; i < allHeaders.length; i++) {
  console.log(allHeaders[i]);
}

console.log(`hi ${allHeaders.length}`);

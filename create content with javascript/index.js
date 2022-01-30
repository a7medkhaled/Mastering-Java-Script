/* 

Update Existing Content Recap
In this section, we looked at multiple ways to change page content:

.innerHTML
.textContent
.innerText
We saw that to set HTML content for an element, out of the three properties list above, we can only use .innerHTML. Using .textContent will erroneously include the HTML characters as plain text inside the element.

We also looked at the difference between .textContent and .innerText. .textContent completely ignores any CSS styling and returns all of the element's HTML just as it's listed in the HTML. On the other hand, the .innerText property will take CSS styling into consideration and will return the text that is visibly rendered on the page.

 */

// create a brand new <span> element
const newSpan = document.createElement("span");
newSpan.textContent = " ahmed jjjj";

// select the first (main) heading of the page
const mainHeading = document.querySelector("#name");
const mainHEADING = document.getElementById("name");

// add the <span> element as the last child element of the main heading
mainHEADING.appendChild(newSpan);

const myPara = document.createElement("p");

myPara.textContent = "I am the text for the paragraph!";
document.body.appendChild(myPara);

const mainHeading2 = document.querySelector("#name");
const htmlTextToAdd = "<h2>Skydiving is fun!</h2>";

mainHeading.insertAdjacentHTML("afterend", htmlTextToAdd);
mainHeading.insertAdjacentHTML("beforebegin", htmlTextToAdd);

/* 
.createElement() to create new elements
.appendChild() to add a child element to a parent element as its last child
.createTextNode() to create a text node
.insertAdjacentHTML() to put HTML text anywhere around an element 


if an element already exists in the DOM and this element is passed to .appendChild(), the .appendChild() method will move it rather than duplicating it
an element's .textContent property is used more often than creating a text node with the .createTextNode() method
the .insertAdjacentHTML() method's second argument has to be text, you can't pass an element
*/

/*

The difference between .firstChild and .firstElementChild, is that 
.firstElementChild will always return the first element, while'
 .firstChild might return whitespace (if there is any)
  to preserve the formatting of the underlying HTML source code.
*/

/*

Remove Page Content Recap
In this short section, we learned two ways to remove an element from the page. You learned about:

.removeChild()
.remove()

*/

//styling

mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "orange";
mainHeading.style.fontSize = "3.5em";

mainHeading.style.cssText =
  "color: blue; background-color: orange; font-size: 3.5em";

mainHeading.setAttribute(
  "style",
  "color: red; background-color: orange; font-size: 3.5em;"
);

/* 
The .classList property has a number of properties of its own. Some of the most popularly used ones are:

.add() - to add a class to the list
.remove() - to remove a class from the list
.toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
.contains() - returns a boolean based on if the class exists in the list or not */

/* 

Update Existing Content Recap
In this section, we looked at multiple ways to change page content:

.innerHTML
.textContent
.innerText
We saw that to set HTML content for an element, out of the three properties list above, we can only use .innerHTML. Using .textContent will erroneously include the HTML characters as plain text inside the element.

We also looked at the difference between .textContent and .innerText. .textContent completely ignores any CSS styling and returns all of the element's HTML just as it's listed in the HTML. On the other hand, the .innerText property will take CSS styling into consideration and will return the text that is visibly rendered on the page.

 */

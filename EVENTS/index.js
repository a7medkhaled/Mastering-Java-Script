const mainHeading = document.querySelector("h1");

mainHeading.addEventListener(
  "click",
  function () {
    console.log("The heading was clicked!");
  },
  true
);

const myCustomDiv = document.createElement("div");

function respondToTheClick(evt) {
  console.log("A paragraph was clicked: " + evt.target.textContent);
}

for (let i = 1; i <= 3; i++) {
  const newElement = document.createElement("p");
  newElement.textContent = "This is paragraph number " + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener("click", respondToTheClick);

document.querySelector("#content").addEventListener("click", function (evt) {
  console.log("A span was clicked with text " + evt.target.textContent);
});

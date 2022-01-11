//the following are falsy values by default

var x = undefined;
if (!x) {
  console.log("undefined is falsy");
}

x = null;
if (!x) {
  console.log("null is falsy");
}

x = "";
if (!x) {
  console.log("emptyString is falsy");
}

x = NaN;
if (!x) {
  console.log("NaN is falsy");
}

//truthy values

x = {};
if (x) {
  console.log("empty object is truthy");
}

x = [];
if (x) {
  console.log("empty array is truthy");
}

// switch statment without break
var tier = "nsfw deck";
var output = "You’ll receive ";

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output +=
      "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

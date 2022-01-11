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

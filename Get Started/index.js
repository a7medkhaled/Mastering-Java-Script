var res = {};

function foo(results) {
  console.log(1);
  res.foo = results;
}

function bar(results) {
  console.log(2);
  res.bar = results;
}

// myApi(..) is some arbitrary function given by a library
setTimeout(foo, 1000);
setTimeout(bar, 2000);

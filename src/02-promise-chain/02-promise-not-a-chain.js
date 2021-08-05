// This is not Chaining Promises

// Create a Promise
let promise = new Promise(function (resolve, reject) {
  resolve(10);
});

// Calling the .then() method multiple times
// on a single promise - It's not a chain
promise.then(function (value) {
  value++;
  // console.log(value);
  return value;
});

promise.then(function (value) {
  value = value + 10;
  // console.log(value);
  return value;
});

promise.then(function (value) {
  value = value + 20;
  console.log(value);
  return value;
});

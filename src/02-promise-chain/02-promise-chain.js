// Chaining Promises - Basic Usage

// Create a Promise
let promise = new Promise(function (resolve, reject) {
  resolve("Resolving a fake Promise.");
});

// Create a Promise Chain
promise
  .then(function (value) {
    console.log(value);
    return value;
  })
  .then(function (value) {
    console.log(`${value} Second time.`);
  });

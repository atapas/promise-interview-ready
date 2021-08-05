// Handling the reject with the .then() handler

// Create a Promise
let promise = new Promise(function (resolve, reject) {
  reject(new Error("Rejecting a fake Promise to handle with .then()."));
});

// Handle it using the .then() handler
promise.then(null, function (value) {
  console.error(value);
});

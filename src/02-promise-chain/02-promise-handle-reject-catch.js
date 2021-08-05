// Handling the reject with the .catch() handler

// Create a Promise
let promise = new Promise(function (resolve, reject) {
  reject(new Error("Rejecting a fake Promise to handle with .catch()."));
});

// Handle it using the .then() handler
promise.catch(function (value) {
  console.error(value);
});

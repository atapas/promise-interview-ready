// Handling resolve with the .then() handler
// Create a Promise
let promise = new Promise(function(resolve, reject) {
    resolve('Resolving a fake Promise.');
});

// Handle it using the .then() handler
promise.then(function(value) {
    console.log(value);
});

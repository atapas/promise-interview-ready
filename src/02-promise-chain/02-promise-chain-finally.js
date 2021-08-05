// Showing .finally() usage

// Create a Promise
let promise = new Promise(function (resolve, reject) {
  resolve("Testing Finally.");
});
// Run .finally() before .then()
promise
  .finally(function () {
    console.log("Running .finally()");
  })
  .then(function (value) {
    console.log(value);
  });

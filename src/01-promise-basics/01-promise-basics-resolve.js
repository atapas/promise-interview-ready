// 1. Create a Promise to fetch the water
let promise = new Promise(function (resolve, reject) {
  // Pretend a delay of 2 sec to fetch it!
  setTimeout(function () {
    // Fetched the water. Let's resolve the promise
    resolve("Hurray! Fetched the Water.");
  }, 2000);
});

// 2. Function to Set up the handler to handle a promise result.
// It is to inform the grandparents when the result is available.
const grandParentsCooking = () => {
  // The handler function to handle the resolved promise
  promise.then(function (result) {
    // Fetched the water. Now grandparents can start the cooking
    console.log(`cooking rice with the ${result}`);
  });
};

// 3. Calling the function to activate the set up.
grandParentsCooking();

// 1. Create the promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // Reject it as the disaster happend.
    reject(
      new Error(
        "Jack fell down and broke his crown. And Jill came tumbling after."
      )
    );
  }, 2000);
});

// 2. Inform grandparents
// but this time we are using the .catch
const grandParentsCooking = () => {
  promise.catch(function (error) {
    console.log(`OMG!!! ${error.message}`);
  });
};

// 3. Call the function
grandParentsCooking();

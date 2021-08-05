// Return a value from the .then() handler

// Create a Promise
let getUser = new Promise(function (resolve, reject) {
  const user = {
    name: "John Doe",
    email: "jdoe@email.com",
    password: "jdoe.password",
  };
  resolve(user);
});

getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);
    // Return a simple value
    return user.email;
  })
  .then(function (email) {
    console.log(`User email is ${email}`);
  });

// Create a Promise
let getUser = new Promise(function(resolve, reject) {
    const user = { 
           name: 'John Doe', 
           email: 'jdoe@email.com', 
           password: 'jdoe.password' 
     };
   resolve(user);
});

getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);
    // Return a Promise
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // Fetch address of the user based on email
            resolve('Bangalore');
         }, 1000);
    });
})
.then(function(address) {
    console.log(`User address is ${address}`);
});

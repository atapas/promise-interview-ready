
// Craete a promise
var promise = new Promise(function(resolve, reject) {
    reject(401);
});

// catch the error
promise
.catch(function(error) {
    if (error === 401) {
        console.log('Rethrowing the 401');
        throw error;
    } else {
        // handle it here
    }
})
.then(function(value) {
    // This one will not run
    console.log(value);
}).catch(function(error) {
    // Rethrow will come here
    console.log(`handling ${error} here`);
});

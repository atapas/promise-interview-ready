let getUser = new Promise(function(resolve, reject) {
    const user = { 
        name: 'John Doe', 
        email: 'jdoe@email.com', 
        permissions: [ 'db', 'hr', 'dev']
    };
    resolve(user);
});

getUser
.then(function(user) {
    console.log(`Got user ${user.name}`);
    // Let's reject if a dev is having the HR permission
    if(user.permissions.includes('hr')){
        throw new Error('You are not allowed to access the HR module.');
    }
    // else resolve as usual
})
.then(function(email) {
    console.log(`User email is ${email}`);
})
.catch(function(error) {
    console.error(error)
});

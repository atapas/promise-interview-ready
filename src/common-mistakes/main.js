console.log('Common mistakes in using Promises');

// ~~~~~~~~~~~~~~ 1. Promises and Loops ~~~~~~~~~~~~~~

const users = ['saviomartin', 'victoria-lo', 'max-programming', 'atapas'];

const fetchData = user => {
    return fetch(`https://api.github.com/users/${user}`);
}

const loopFetches = () => {
    for (let i = 0; i < users.length; i++) {
        console.log(`*** Fetching details of ${users[i]} ***`);
        const response = fetchData(users[i]);
        response.then(response => {
            response.json().then(user => {
                console.log(`${user.name} is ${user.bio} has ${user.public_repos} public repos and ${user.followers} followers`);
            });
        });
    }
}

const loopAll = async () => {
    const responses = await Promise.all(users.map(user => fetchData(user)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log(data);
    data.map(user => {
        console.log(`*** Fetching details of ${user.name} ***`);
        console.log(`${user.name} is ${user.bio} has ${user.public_repos} public repos and ${user.followers} followers`)
    });
}

const loopFetchesAsync = async () => {
    for (let i = 0; i < users.length; i++) {
        console.log(`=== Fetching details of ${users[i]} ===`);
        const response = await fetchData(users[i]);
        const user = await response.json();            
        console.log(`${user.name} is ${user.bio} has ${user.public_repos} public repos and ${user.followers} followers`);
    }
}

// loopFetches();
// loopAll();
// loopFetchesAsync();

// ~~~~~~~~~~~~~~ 2. Chain vs. No Chain ~~~~~~~~~~~~~~
const ten = new Promise((resolve, reject) => {
    resolve(10);
});

const promiseNoChain = () => {
    ten.then((result) => {
      return result + 10;
    });
    ten.then((result) => {
      return result * 10;
    });
    ten.then((result) => {
      return result - 10;
    });
    ten.then((result) => {
      console.log(`With No Chaining ${result}`);
    });
}

const promiseChain = () => {
    
    ten
    .then((result) => {
        return result + 10;
    })
    .then((result) => {
        return result * 10;
    })
    .then((result) => {
        return result - 10;
    })
    .then((result) => {
        console.log(`With Promise Chaining ${result}`);
    });
}

// promiseChain();
// promiseNoChain();

// ~~~~~~~~~~~~~~ 3. Not Handling Errors ~~~~~~~~~~~~~~
const oddEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve("Even");
    } else {
      reject(new Error("Odd"));
    }
  });
};

oddEven(11).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message);
});

// ~~~~~~~~~~~~~~ 4. Skipping Functions in .then() ~~~~~~~~~~~~~~
const hello = Promise.resolve("Hello");
hello.then('world').then(result => console.log(result));

// ~~~~~~~~~~~~~~ 5. Promise for Synchronous Values ~~~~~~~~~~~~~~

const cache = {
    'tapas.email.com': {
        'name': 'Tapas Adhikary',
        'blog': 'GreenRoots Blog'
    }
};

const getData = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFromCache = cache[email];
            if(!userFromCache) {
                // Make the call to fetch user data
                // update cache
                console.log('Make the call and update cache');
            } else {
                console.log(`User details ${JSON.stringify(userFromCache)}`);
            }
        }, 2000);
    })
};

const refactoredGetData = (email) => {
    const userFromCache = cache[email];
    if(userFromCache) {
        console.log(`User details ${JSON.stringify(userFromCache)}`);
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Make the call and update cache');
            }, 2000);

        });
    }
};

getData('tapas.email.com');
refactoredGetData('tapas.email.com');

// ~~~~~~~~~~~~~~ 6. Using unnecessary try-catch with promises ~~~~~~~~~~~~~~

// Redundant try-catch
new Promise((resolve, reject) => {
    try {
      const value = getValue();
      // do something with value  
      resolve(value);
    } catch (e) {
      reject(e);
    }
})
.then(result => console.log(result))
.catch(error => console.log(error));

// Better
new Promise((resolve, reject) => {
    const value = getValue();
    // do something with value 
    resolve(value);
})
.then(result => console.log(result))
.catch(error => console.log(error));
                















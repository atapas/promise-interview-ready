// It resolves with the value red after 1 second 
const red = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('red');
    }, 1000);
});

// It resolves with the value green after 3 seconds
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('green');
    }, 3000);
});

// It resolves with the value blue after 5 seconds
const blue = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('blue');
    }, 5000);
});


const testAny = async () => {
    try{
        const color = await Promise.any([red, green, blue]);
        console.log(color);
    catch(err) {
        console.log(err);
    }
}

testAny();


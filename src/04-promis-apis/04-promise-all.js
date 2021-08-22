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


const testAll = async () => {
    const colors = await Promise.all([red, green, blue]);
    console.log(colors);
    colors.forEach(color => {
        console.log(color);
    });
}

testAll();


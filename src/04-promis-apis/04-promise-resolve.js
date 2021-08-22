

// It resolves with the value green after 3 seconds
const green = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('green');
    }, 3000);
});

const resolveOne = async () => {
    const result = await Promise.resolve(green);
    console.group(result);
}

resolveOne();
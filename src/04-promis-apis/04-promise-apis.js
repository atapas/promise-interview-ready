const colors = ['red', 'green', 'blue'];

const red = new Promise(resolve => {
    setTimeout(() => {
        resolve('red');
    }, 3 * 1000);
});

const green = new Promise(resolve => {
    setTimeout(() => {
        resolve('green');
    }, 2 * 1000);
});

const blue = new Promise(resolve => {
    setTimeout(() => {
        resolve('blue');
    }, 1 * 1000);
});


const selectValue = () => {
    clear();
    const apiSelectBox = document.getElementById("apis-list-id");
    const selected = apiSelectBox.value;
    console.log(selected);

    switch (selected) {
        case 'all':
            handleAll();
            break;
        case 'any':
            handleAny();
            break;
        case 'race':
            handleRace();
            break;
        case 'allSettled':
            handleAllSettled();
            break;
        default:
            break;
    }
};

const setValues = (color, value, duration) => {
    document.getElementById(`${color}-id`).innerHTML = value;
    document.getElementById(`${color}-id`).setAttribute('class', value);
    document.getElementById(`${color}-id`).style.animationName = value;
    document.getElementById(`${color}-id`).style.animationDuration = duration;
}

const clear = () => {
    colors.forEach(color => {
        setValues(color, '', '0s');
    });
}

const handleAll = () => {
   Promise.all([red, green, blue]).then(colors => {
    console.log(colors);
    colors.forEach(color => {
        setValues(color, color, '3s');
    })
    }).catch(err => {
        console.log(err);
    });
};

const handleAny = () => {
    Promise.any([red, green, blue]).then(color => {
        console.log(color);
        setValues(color, color, '3s');
    }).catch(err => {
        console.log(err);
    });
};

const handleRace = () => {
    Promise.race([ green, red, blue]).then(color => {
        console.log(color);
        setValues(color, color, '3s');
    }).catch(err => {
        console.log(err);
    });
};

const handleAllSettled = () => {
    Promise.allSettled([red, green, blue]).then(colors => {
        console.log(colors);
        for (const {status, value} of colors) {
            if (status === 'rejected') {
                console.log(color.reason);
            } else if (status === 'fulfilled') {
                setValues(value, value, '3s');
            }
        }
    }).catch(err => {
        console.log(err);
    });
};


    
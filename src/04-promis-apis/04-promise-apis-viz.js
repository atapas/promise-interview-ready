
// Get the time represented in the
// format of hh:mm:ss(24 hours clock)
const getTimeClock = (showMs) => {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ms = now.getMilliseconds();
    m = padWithZero(m);
    s = padWithZero(s);
    return showMs ? `${h}:${m}:${s}:${ms}` : `${h}:${m}:${s}`; 
};

// Pad the single digit numbers with zero
const padWithZero = (num) => {
    if (num < 10) {num = "0" + num};
    return num;
}

// Get the delay values for all the colors
let redDelay = document.getElementById("red-delays-id").value;
let greenDelay = document.getElementById("green-delays-id").value;;
let blueDelay = document.getElementById("blue-delays-id").value;;
console.log(`Initial delays: red - ${redDelay}, green - ${greenDelay}, blue - ${blueDelay}`);

// Get the reject flag for all the colors
let rejectRed = document.getElementById("red-error-id").checked;
let rejectGreen = document.getElementById("green-error-id").checked;
let rejectBlue = document.getElementById("blue-error-id").checked;
console.log(`Initial rejections: red - ${rejectRed}, green - ${rejectGreen}, blue - ${rejectBlue}`);

// Call this function when a delay is set for a color
const selectDelay = () => {
    redDelay = document.getElementById("red-delays-id").value;
    greenDelay = document.getElementById("green-delays-id").value;;
    blueDelay = document.getElementById("blue-delays-id").value;;
    console.log(`Delays: red - ${redDelay}, green - ${greenDelay}, blue - ${blueDelay}`);
    selectValue();
}

// Call this function when a reject flag is set for a color
const rejectColor = () => {
    rejectRed = document.getElementById("red-error-id").checked;
    rejectGreen = document.getElementById("green-error-id").checked;
    rejectBlue = document.getElementById("blue-error-id").checked;
    console.log(`Rejections: red - ${rejectRed}, green - ${rejectGreen}, blue - ${rejectBlue}`);
    selectValue();
}

// Call this method when a Promise API is selected
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
        case 'handleResolve':
            handleResolve();
            break
        default:
            break;
    }
};

// Set the value, color, and animation when a Promise Resolves
const setValues = (color, value, duration) => {
    document.getElementById(`${color}-id`).innerHTML = value;
    document.getElementById(`${color}-id`).parentElement.setAttribute('class', value);
    document.getElementById(`${color}-id`).style.animationName = value;
    document.getElementById(`${color}-id`).style.animationDuration = duration;
}

// Clear all the value, color, animations
const clear = () => {
    const colors = ['red', 'green', 'blue'];
    colors.forEach(color => {
        setValues(color, '', '0s');
    });
}

// Clear all the logs from the log board
const clearLogs = () => {
    const logElem = document.getElementById('log-id');
    logElem.innerHTML = '';
}

// Add logs to the log board
const log = (msg, isError) => {
    const logElem = document.getElementById('log-id');
    const logListElem = document.createElement('li');
    isError ? logListElem.setAttribute('class', 'error') : logListElem.removeAttribute('class');
    logListElem.innerHTML = `<span><b>${getTimeClock()} -</b> ${msg}</span>`;
    logElem.appendChild(logListElem);
}

const setTheme = (theme) => {
    const logElem = document.getElementById('log-container');
    const itemToRemove = logElem.classList.item(1);
    logElem.classList.remove(itemToRemove);
    logElem.classList.add(theme);
}

// Handle the Promise.all() API
const handleAll = async () => {
    try {
        log(`🕛 Started handling all the colors using Promise.all([red, green, blue])`);

        const red = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectRed ? reject('red') : resolve('red');
            }, redDelay);
        });
        const green = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectGreen ? reject('green') : resolve('green');
            }, greenDelay);
        });
        const blue = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectBlue ? reject('blue') : resolve('blue');
            }, blueDelay);
        });

        const colors = await Promise.all([red, green, blue]);
        console.log(colors);
        colors.forEach(color => {
            setValues(color, color, '3s');
        })
        log(`✔️ Finished handling all the colors using Promise.all([red, green, blue])`); 
    }catch(err) {
        log(`❌ Rejected the color ${err}. Rejecting All.`, true);
    };
};

// Handle the Promise.any() API
const handleAny = async () => {
    try {
        log(`🕛 Started handling any of the colors using Promise.any([red, green, blue])`); 

        const green = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectGreen ? reject('green') : resolve('green');
            }, greenDelay);
        });

        const red = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectRed ? reject('red') : resolve('red');
            }, redDelay);
        });
        const blue = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectBlue ? reject('blue') : resolve('blue');
            }, blueDelay);
        });

        const color = await Promise.any([red, green, blue]);
        log(`${color} got picked up! Lucky one.`);
        setValues(color, color, '3s');
        log(`✔️Finished handling any of the colors using Promise.any([red, green, blue])`); 
    }catch(err) {
        log(`❌ Rejected the color ${err}.`, true);
    };
};

// Handle the Promise.race() API
const handleRace = async () => {
    try{
        log(`🕛 Started racing of the colors using Promise.race([red, green, blue])`);

        const blue = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectBlue ? reject('blue') : resolve('blue');
            }, blueDelay);
        });
        const red = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectRed ? reject('red') : resolve('red');
            }, redDelay);
        });
        const green = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectGreen ? reject('green') : resolve('green');
            }, greenDelay);
        });

        const color = await Promise.race([ green, red, blue]);
        log(`${color} own the race! Great champ.`);
        setValues(color, color, '3s');
        log(`✔️ Finished racing of the colors using Promise.race([red, green, blue])`);
        
    } catch(err) {
        log(`❌ Rejected the color ${err}. Rejecting All`, true);
    }
};

// Handle the Promise.allSettled() API
const handleAllSettled = async () => {
    try {
        log(`🕛 Started settling of the colors using Promise.allSettled([red, green, blue])`); 
        const red = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectRed ? reject('red') : resolve('red');
            }, redDelay);
        });
        
        const green = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectGreen ? reject('green') : resolve('green');
            }, greenDelay);
        });
        
        const blue = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectBlue ? reject('blue') : resolve('blue');
            }, blueDelay);
        });

        const colors = await Promise.allSettled([red, green, blue]);
        console.log(colors);
        for (const {status, value, reason} of colors) {
            if (status === 'rejected') {
                throw new Error(reason)
            } else if (status === 'fulfilled') {
                setValues(value, value, '3s');
            }
        }
        log(`✔️ Finished settling of the colors using Promise.allSettled([red, green, blue])`); 
    }catch(err) {
        log(`❌ Rejected the color ${err}.`, true);
    };
};

// Handle the Promise.resolve() API
const handleResolve = async () => {
    try {
        log(`🕛 Resolving all colors individually with Promise.resolve(color => red, green, blue)`); 
        const red = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectRed ? reject('red') : resolve('red');
            }, redDelay);
        });
        
        const green = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectGreen ? reject('green') : resolve('green');
            }, greenDelay);
        });
        
        const blue = new Promise((resolve, reject) => {
            setTimeout(() => {
                rejectBlue ? reject('blue') : resolve('blue');
            }, blueDelay);
        });

        const redResolved = await Promise.resolve(red);
        log(`✔️ Finished resolving ${redResolved} using Promise.resolve(${redResolved})`); 
        setValues(redResolved, redResolved, '3s');
        
        const greenResolved = await Promise.resolve(green);
        log(`✔️ Finished resolving ${greenResolved} using Promise.resolve(${greenResolved})`); 
        setValues(greenResolved, greenResolved, '3s');

        const blueResolved = await Promise.resolve(blue);
        log(`✔️ Finished resolving ${blueResolved} using Promise.resolve(${blueResolved})`); 
        setValues(blueResolved, blueResolved, '3s');
    }catch(err) {
        log(`❌ Rejected the color ${err}.`, true);
    };
};


    
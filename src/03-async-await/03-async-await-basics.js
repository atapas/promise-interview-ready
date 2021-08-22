
const getTimeClock = () => {
    return new Date().getHours() 
    + ":" 
    + new Date().getMinutes() 
    + ":" 
    + new Date().getSeconds();
};

function getSynchronousHi() {
    return 'Hi';
}

function getHelloFromAPromise() {
    return Promise.resolve('Hello');
}

function getHolaWihthADelay() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Hola');
        }, 4000);
    });
}


async function caller() {

    const messageHi = await getSynchronousHi();
    console.log(getTimeClock(), messageHi);

    const messageHello = await getHelloFromAPromise();
    console.log(getTimeClock(), messageHello);

    const messageHola = await getHolaWihthADelay();
    console.log(getTimeClock(), messageHola);

}

caller();



function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}


function main() {
    console.log('main');
    setTimeout(f1, 0);
    f2();
}

main();
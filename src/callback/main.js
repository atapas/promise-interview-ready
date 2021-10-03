console.log('Callback');

function foo(bar) {
    bar()
}

foo(function() {
    console.log('bar');
})

// Pizza Hub
function orderPizza(type, name, callback) {
    console.log('Ordering pizza...');
    setTimeout(function () {
        let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
        console.log(`On the Pizzahub server ${msg}`);
        callback(msg);
    }, 3000);
}

// Robin's Phone
orderPizza('veg', 'cheese', function (msg) {
    console.log(`On Robin's phone ${msg}`);
});
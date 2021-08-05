const FETCH_SHOP_ID_DELAY = 1000;
const FETCH_PIZZA_DETAILS_DELAY = 1500;
const FETCH_BEVERAGES_DETAILS_DELAY = 1000;
const CREATE_ORDER_DELAY = 2000;
const DELIVER_ORDER_DELAY = 1000;

const fetchNearByShop = ({lang, lat}) => {
    console.log(`🧭 Locating the nearby shop at (${lang} ${lat})`);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          // Let's assume, it is a nearest pizza shop
          // and resolve the promise using the shop id.
          const response = {
            shopId: "s-123",
          };
          resolve(response.shopId);
        }, FETCH_SHOP_ID_DELAY);
      });
}

const fetchAvailablePizzas = ({shopId}) => {
    console.log(`Getting Pizza List from the shop ${shopId}...`);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          const response = {
            // The list of pizzas 
            // available at the shop
            pizzas: [
              {
                type: "veg",
                name: "margherita",
                id: "pv-123",
              },
              {
                type: "nonveg",
                name: "pepperoni slice",
                id: "pnv-124",
              },
            ],
          };
          resolve(response);
        }, FETCH_PIZZA_DETAILS_DELAY);
      });
}

// Returns a promise with pizza that matches the customer request
let getMyPizza = (result, type, name) => {
  let pizzas = result.pizzas;
  console.log("Got the Pizza List", pizzas);
  let myPizza = pizzas.find((pizza) => {
    return (pizza.type === type && pizza.name === name);
  });
  return new Promise((resolve, reject) => {
    if (myPizza) {
      console.log(`✔️ Found the Customer Pizza ${myPizza.name}!`);
      resolve(myPizza);
    } else {
      reject(
        new Error(
          `❌ Sorry, we don't have ${type} ${name} pizza. Do you want anything else?`
        )
      );
    }
  });
};

const fetchBeverages = ({pizzaId}) => {
    console.log(`🧃 Getting Beverages for the pizza ${pizzaId}...`);
    return new Promise((resolve, reject) => {
        setTimeout(function () {
          const response = {
            id: "b-10",
            name: "cola",
          };
          resolve(response);
        }, FETCH_BEVERAGES_DETAILS_DELAY);
      });
}

function fetch(endpoint, payload) {
  if (endpoint.includes("/api/pizzahub/shop")) {
    return fetchNearByShop(payload);
  } else if (endpoint.includes("/api/pizzahub/pizza")) {
    return fetchAvailablePizzas(payload);
  } else if (endpoint.includes("/api/pizzahub/beverages")) {
    return fetchBeverages(payload);
  }
}

// Create the order
let create = (endpoint, payload) => {
  if (endpoint.includes("/api/order")) {
    console.log("Placing the pizza order with...", payload);
    const { type, name, beverage } = payload;
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({
          success: true,
          message: `🍕 The ${type} ${name} pizza order with ${beverage} has been placed successfully.`,
        });
      }, CREATE_ORDER_DELAY);
    });
  }
};


function orderPizza(type, name) {
  // Get the Nearby Pizza Shop
  fetch("/api/pizzahub/shop", {'lang': 38.8951 , 'lat': -77.0364})
    // Get all pizzas from the shop  
    .then((shopId) => fetch("/api/pizzahub/pizza", {'shopId': shopId}))
    // Check the availability of the selected pizza
    .then((allPizzas) => getMyPizza(allPizzas, type, name))
    // Check the availability of the selected beverage
    .then((pizza) => fetch("/api/pizzahub/beverages", {'pizzaId': pizza.id}))
    // Create the order
    .then((beverage) =>
      create("/api/order", {
        beverage: beverage.name,
        name: name,
        type: type,
      })
    )
    .then((result) => console.log(result.message))
    .catch(function (error) {
      console.error(`${error.message}`);
    });
}

// Order Pizza
orderPizza("nonveg", "salami");

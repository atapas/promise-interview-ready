const FETCH_SHOP_ID_DELAY = 1000;
const FETCH_PIZZA_DETAILS_DELAY = 1500;
const FETCH_BEVERAGES_DETAILS_DELAY = 1000;
const CREATE_ORDER_DELAY = 2000;

function query(endpoint, callback) {
    if (endpoint === `/api/pizzahub/`) {
      setTimeout(function(){
        const response =  {
          'shopId': 's-123'
        };
        callback(response);
      }, FETCH_SHOP_ID_DELAY);
    } else if (endpoint.indexOf('/api/pizzahub/pizza/') >=0) {
        setTimeout(function(){
          const response = {
              pizzas: [
                {
                  'type': 'veg', 
                  'name': 'margherita', 
                  'id': 'pv-123'
                },
                {
                  'type': 'nonveg', 
                  'name': 'chicken cheese', 
                  'id': 'pnv-124'
                }
              ]
          };
          callback(response);
        }, FETCH_PIZZA_DETAILS_DELAY);
    } else if (endpoint.indexOf('/api/pizzahub/beverages') >=0) {
        setTimeout(function(){
          const response = {
              'id': 'b-10', 
              'beverage': 'cola'
          };
          callback(response);
        }, FETCH_BEVERAGES_DETAILS_DELAY);
    } 
}

const createOrder = (payload) => {
  setTimeout(function(){
    const {type, name, beverage} = payload;
    console.log(`The ${type} ${name} pizza order with ${beverage} has been placed successfully.`);
  }, CREATE_ORDER_DELAY);
}

function orderPizza(type, name) {
    
    // Query the pizzahub for a store
    console.log('Locating the nearby shop...');
    query(`/api/pizzahub/`, function(result, error){
       if (!error) {
           let shopId = result.shopId;
           console.log(`Got the Shop Id as ${shopId}`);
           // Get the store and query pizzas
           console.log('Querying for the pizzas...');
           query(`/api/pizzahub/pizza/${shopId}`, function(result, error){
               if (!error) {
                   let pizzas = result.pizzas;
                   console.log('Available Pizzas in the Shop =>', pizzas);
                   // Find if my pizza is availavle
                   let myPizza = pizzas.find((pizza) => {
                       return (pizza.type === type && pizza.name === name);
                   });
                   if (myPizza) {
                    console.log(`Yes, we found the customer pizza: ${myPizza.name}`);
                    // Check for the free beverages
                    console.log('Querying for the available beverages...');
                    query(`/api/pizzahub/beverages/${myPizza.id}`, function(result, error){
                        if (!error) {
                            let beverage = result.beverage;
                            console.log(`Beverage free with this order is, ${beverage}`);

                            console.log(`Hold tight! Placing your order...`);
                            // Prepare an order
                            createOrder({'type': type, 'name': name, 'beverage': beverage}, function(result, error){
                                if (!error) {
                                    console.log(result);
                                } else {
                                    console.log(`Bad luck, Try Again!`);
                                }
                            });

                        } else {
                          error('Error Fetching the beverages');
                        }
                    })
                   } else {
                    console.warn(`Sorry, we don't have ${type} ${name} pizza. Do you want anything else?`);
                   }        
               } else {
                 error('Error fetching the shop');
               }
           });
       } 
    });
}

// Call the orderPizza method
orderPizza('nonveg', 'chicken cheese');
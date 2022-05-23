const CartController = require('../controllers/cart.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.post('/ecom/api/v1/addProduct', CartController.addProductToCart);
}

module.exports = routes; 
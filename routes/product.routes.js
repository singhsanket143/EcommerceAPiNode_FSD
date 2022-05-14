const ProductController = require('../controllers/product.controller');

const routes = (app) => {
    app.get('/ecom/api/v1/products', ProductController.getProudcts);
}

module.exports = routes;
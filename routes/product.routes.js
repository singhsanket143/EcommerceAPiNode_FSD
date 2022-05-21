const ProductController = require('../controllers/product.controller');
const AuthValidator = require('../middlewares/authValidator');
const RequestValidator = require('../middlewares/requestValidator');
const AuthorisationValidator = require('../middlewares/authorizationValidator');
const routes = (app) => {
    app.get('/ecom/api/v1/products', AuthValidator.isAuthenticated, ProductController.getProudcts);
    app.post(
        '/ecom/api/v1/products', 
        RequestValidator.validateProductCreationRequest, 
        AuthValidator.isAuthenticated, 
        AuthorisationValidator.canAddProduct, 
        ProductController.createProduct
    );
}

module.exports = routes;
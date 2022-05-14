const CategoryController = require('../controllers/category.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.get('/ecomm/api/v1/categories', CategoryController.getAllCategories);
    app.post('/ecom/api/v1/categories', CategoryController.createCategory);
    app.delete('/ecom/api/v1/categories/:id', CategoryController.deleteCategory);
    app.get('/ecom/api/v1/categories/:id', CategoryController.getCategory);
    app.get('/ecom/api/v1/categoriesByName', CategoryController.getCategoryByName);
    app.put('/ecom/api/v1/categories/:id', CategoryController.updateCategory);
}

module.exports = routes; 
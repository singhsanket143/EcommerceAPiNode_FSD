const CategoryController = require('../controllers/category.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.get('/ecomm/api/v1/categories', CategoryController.getCategory);
}

module.exports = routes; 
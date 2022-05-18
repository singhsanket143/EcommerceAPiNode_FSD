const AuthController = require('../controllers/auth.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.post('/ecom/signup', AuthController.signup);
}

module.exports = routes; 
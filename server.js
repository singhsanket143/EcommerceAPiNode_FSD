const express = require('express');
const bodyParser = require('body-parser'); // npm i body-parser
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const app = express();

/*
    We need to add a middleware that will help
    express to read all query and body params
    The below code is more or less like a configuration
*/
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

categoryRoutes(app);

app.get('/home', function (req, res) {
    res.send("welcome to home");
})

app.listen(configs.PORT, () => {
    console.log('Server started on PORT', configs.PORT);
});
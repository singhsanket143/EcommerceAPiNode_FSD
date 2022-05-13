const express = require('express');
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const app = express();

categoryRoutes(app);

app.get('/home', function (req, res) {
    res.send("welcome to home");
})

app.listen(configs.PORT, () => {
    console.log('Server started on PORT', configs.PORT);
});
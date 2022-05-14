const express = require('express');
const bodyParser = require('body-parser'); // npm i body-parser
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const app = express();

const Product = require('./models/index').Product;
const Categories = require('./models/index').Categories;
/*
    We need to add a middleware that will help
    express to read all query and body params
    The below code is more or less like a configuration
*/
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

categoryRoutes(app);

app.get('/home', async function (req, res) {
    const getCategories = await Categories.findAll({ include: Product });
    res.json(getCategories);
})

app.listen(configs.PORT, async () => {
    console.log('Server started on PORT', configs.PORT);
    // const newProduct = await Product.create({
    //     name: 'Ipad',
    //     cost: 100000,
    //     description: 'apple ipad',
    //     categoryId: 1
    // });
    // console.log("product created successfully");
    
    // console.log(getproducts);

});
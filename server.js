const express = require('express');
const bodyParser = require('body-parser'); // npm i body-parser
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
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
productRoutes(app);
authRoutes(app);
cartRoutes(app);

app.get('/home', async function (req, res) {
    const getCategories = await Categories.findAll({ include: Product });
    res.json(getCategories);
})

app.get('/', (req, res) => {
    res.send('new home');
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

    // await db.sequelize.sync({ force: true });
    // await User.sync({ alter: true });
    // const user = await User.create({
    //     email: 'c@d.com',
    //     password: '123456',
    //   });
    // const sellerRole = await Role.findOne({
    //     where: {
    //         id: 2
    //     }
    // });
    // // user.addRole(adminRole, { through: { selfGranted: false } });
    // const user = await User.findOne({
    //     where: {
    //         id: 3
    //     }
    // });
    // user.addRole(sellerRole, {through: {selfGranted: false}});
    // const result = await User.findAll({
    //     include: [{model: Role}], 
    //     raw: true,
    //     nest: true, 
    // });
    //   console.log(result);
    // const user = await User.findOne({
    //     where: { email: 'a@b.com' },
    //     include: Role
    //   });
    //   console.log(user);
});
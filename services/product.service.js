const Product = require('../models/index').Product;
const Categories = require('../models/index').Categories;


const getproducts = async () => {
    const products = await Product.findAll({include: Categories});
    return products
}

module.exports = {
    getproducts
}
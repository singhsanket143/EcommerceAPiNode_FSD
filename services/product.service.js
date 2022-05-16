const Product = require('../models/index').Product;
const Categories = require('../models/index').Categories;
const { Op } = require("sequelize");

const createFilter = (data) => {
    let filter = {};
    if(data.minPrice && data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
        Object.assign(filter, {[Op.gte]: data.minPrice});
        console.log(filter);
    } else if (data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
    } else if(data.minPrice) {
        Object.assign(filter, {[Op.gte]: data.minPrice});
    }
    return filter
}

const getproducts = async (data) => {
    let products;
    if(!data.categoryId && !data.minPrice && !data.maxPrice) {
        products = await Product.findAll({include: Categories});
        return products;
    } 
    if(!data.categoryId) {
        let filter = createFilter(data);
        products = await Product.findAll({where: {
            cost: filter
        }});
        return products;
    } 
    let filter = createFilter(data);
    products = await Product.findAll({where: {
        cost: filter,
        categoryId: data.categoryId
    }});
    return products;
}
// select * from products where cost < 2000 AND cost > 500;

const createProduct = async (data) => {
    const product = await Product.create({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId: data.categoryId,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return product
}

module.exports = {
    getproducts,
    createProduct
}


// Write an api for getting all the products that belong to a particular category
// /ecom/api/v1/products?categoryId=2&maxPrice=10000 -> URL
// Response : 
/*
    {
        message: "Successfully fetched products for the category",
        code: 200,
        success: true,
        data: [
            {  
                id: 1,
                name: "iphone",
                desc: "lsnclskjnfv",
                cost: 100000
            }, 
            {

            }
        ]
    }
*/

/*
    GET /ecom/api/v1/products -> all products
    GET /ecom/api/v1/products?categoryId=2 -> all products of 2nd category
    GET /ecom/api/v1/products?categoryId=2&minPrice=9000 -> all products of 2nd category 
                                                            with min price 9000
    GET /ecom/api/v1/products?categoryId=2&minPrice=9000&maxPrice=12000 -> all products of 
                                                                            2nd category 
                                                                            with min price 9000
                                                                            and max price 12000

*/  
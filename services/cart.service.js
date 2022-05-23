const Cart = require('../models/index').Cart;
const Product = require('../models/index').Product;
const createCart = async (uid) => {
    console.log("uid", uid);
    const cart = await Cart.create({
        userId: uid
    });
    return cart;
}

const addProductToCart = async (data) => {
    console.log("data", data);
    const cart = await Cart.findOne({
        where: {
            id: data.cartId
        }
    });
    if(!cart.status == 'creation') {
        return false;
    }
    const product = await Product.findOne({
        where: {
            id: data.productId
        }
    });
    cart.addProduct(product, {through: {quantity: 1}});
    return cart;
}

const getCartByUser = async (uid, cartStatus) => {
    const cart = await Cart.findOne({
        where: {
            userId: uid,
            status: cartStatus
        }
    });
    return cart;
}


module.exports = {
    createCart,
    addProductToCart,
    getCartByUser
}
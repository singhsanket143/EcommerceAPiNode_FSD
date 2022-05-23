const CartService = require('../services/cart.service');

const addProductToCart = async (req, res) => {
    let cart = await CartService.getCartByUser(req.body.userId, 'creation');
    if(!cart) {
        cart = await CartService.createCart(req.body.userId);
    }
    console.log(cart, cart.id)
    const response = await CartService.addProductToCart({
        productId: req.body.productId,
        cartId: cart.id
    });
    if(!response) {
        return res.json({
            code: 500,
            success: false,
            message: 'Cannot add product to cart'
        });
    }
    return res.json({
        code: 200,
        success: true,
        message: 'Added product to cart'
    });

}

module.exports = {
    addProductToCart
}
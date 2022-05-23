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

const removeProductFromCart = async (req, res) => {
    let cart = await CartService.getCartByUser(req.body.userId, 'creation');
    if(!cart) {
        return res.json({
            code: 500,
            success: false,
            message: 'No product in the cart'
        });
    }
    console.log(cart, cart.id)
    const response = await CartService.removeProductFromCart({
        productId: req.body.productId,
        cartId: cart.id
    });
    if(!response) {
        return res.json({
            code: 500,
            success: false,
            message: 'Cannot remove product from cart'
        });
    }
    return res.json({
        code: 200,
        success: true,
        message: 'Removed product from cart'
    });

}

const updateCartStatus = async (req, res) => {
    const response = await CartService.updateCartStatus(req.body.cartId, req.body.status);
    return res.json({
        code: 201,
        message: 'Successfully updated cart status',
        data: response,
        success: true
    })
}

module.exports = {
    addProductToCart,
    removeProductFromCart,
    updateCartStatus
}
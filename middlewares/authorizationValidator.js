const Auth = require('../services/auth.service');
const Role = require('../models/index').Role;
const isAdmin = async(req) => {
    const user = await Auth.getUserById(req.user);
    const adminRole = await Role.findOne({
        where: {
            id: 1
        }
    })
    return await user.hasRole(adminRole);
}  

const isSeller = async (req) => {
    const user = await Auth.getUserById(req.user);
    const sellerRole = await Role.findOne({
        where: {
            id: 3
        }
    })

    return await user.hasRole(sellerRole);
}

const canAddProduct = async (req, res, next) => {
    const isUserAdmin = await isAdmin(req);
    const isUserSeller = await isSeller(req);
    if(isUserAdmin || isUserSeller) {
        next();
    } else {
        return res.json({
            message: 'User unauthorized',
            success: true,
            code: 401
        })
    }
}

module.exports = {
    canAddProduct
}
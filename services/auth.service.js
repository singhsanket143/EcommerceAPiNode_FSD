const User = require('../models/index').User;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signup = async (data) => {
    const user = await User.create({
        email: data.email,
        password: data.password
    });
    return user;
}

const getUser = async (userEmail) => {
    const user = await User.findOne({
        where: {
            email: userEmail
        }
    });
    return user;
}

const checkPassword = (userPassword, encryptedPassword) => {
    return bcrypt.compareSync(userPassword, encryptedPassword);
}


const createToken = (user) => {
    return jwt.sign({id: user.id, email: user.email}, 'relevel', { expiresIn: 60 * 60 });
}

module.exports = {
    signup,
    getUser,
    checkPassword,
    createToken
}
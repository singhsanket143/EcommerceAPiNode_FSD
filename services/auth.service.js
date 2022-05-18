const User = require('../models/index').User;

const signup = async (data) => {
    const user = await User.create({
        email: data.email,
        password: data.password
    });
    return user;
}


module.exports = {
    signup
}
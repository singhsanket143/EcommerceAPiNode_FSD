const Auth = require('../services/auth.service');

const signup = async (req, res) => {
    console.log(req.body)
    const response = await Auth.signup(req.body);
    return res.json({
        message: 'Successfully created a user',
        success: true,
        code: 200,
        data: response
    });
}

module.exports = {
    signup
}
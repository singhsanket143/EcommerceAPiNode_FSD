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

const signin = async (req, res) => {
    const user = await Auth.getUser(req.body.email);
    if(!user) {
        console.log("Email not found");
        return res.json({
            code: 404,
            message: "Email id not found",
            success: false
        });
    }
    if(!Auth.checkPassword(req.body.password, user.password)) {
        console.log("password incorrect");
        return res.json({
            code: 401,
            message: "password incorrect",
            success: false
        });
    }
    const token = Auth.createToken(user);
    return res.json({
        code: 200,
        message: 'Sign in successful',
        data: token,
        success: true
    });
}

const updateUser = async (req, res) => {
    let user;
    console.log(req.query);
    if(req.query.addRole == true) {
        user = Auth.addRoleToUser(req.params.userId, req.body.roleId);
    } else {
        user = Auth.removeRoleFromUser(req.params.userId, req.body.roleId);
    }
    if(!user) {
        return res.json({
            success: false,
            code: 500,
            message: 'Internal server error, something went wrong'
        });
    }
    return res.json({
        success: true,
        code: 200,
        message: 'Updated the user'
    });
}

const getRolesForUser = async (req, res) => {
    const response = await Auth.getRolesForUser(req.params.userId);
    return res.json({
        success: true,
        code: 200,
        message: 'Successfully fetched the roles',
        data: response
    });
}

module.exports = {
    signup,
    signin,
    updateUser,
    getRolesForUser
}
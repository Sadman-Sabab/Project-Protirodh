const jwt = require('jsonwebtoken')
const User = require("../models/SignUpModels")

const checkLogin = (req, res, next) => {

    // const { authorization } = req.headers;


    try {

        // const token = authorization.split(' ')[1]
        const token = req.cookies[process.env.COOKIE_NAME];


        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const { uniqueId, userId } = decoded;

        req.uniqueId = uniqueId;
        req.userId = userId;

        next();

    }
    catch {
        next("Authentication failed1!")
    }
}

module.exports = checkLogin;
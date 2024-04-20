const User = require('../models/user')
const { AuthorizationError } = require('../errors')
const jwt = require('jsonwebtoken');

const authentication = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new AuthorizationError("Unauthorized user!");
        }

        const token = authHeader.split(' ')[1]

        if (!token) {
            throw new AuthorizationError('Unauthorized user!');
        }

        const decodePayload = jwt.verify(token, process.env.JWT_SECRET)

        if (!decodePayload) {
            throw new AuthorizationError('Unauthorized user!');
        }

        const user = await User.findById(decodePayload.userId).select('-password');

        if (!user) {
            throw new AuthorizationError('Unauthorized user!');
        }

        req.user = user;

        next()
    } catch (error) {
        next(error)        
    }
}

module.exports = authentication;
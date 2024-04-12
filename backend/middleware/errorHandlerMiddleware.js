const { CustomApiError } = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHanderMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong.'
    }
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors).map((item) => item.message).join(', ');
        customError.statusCode = 400;
    }
    if (err.code && err.code == 11000) {
        customError.msg = `Email already exist, please enter another email.`;
        customError.statusCode = 400;
    }

    if (err.name == 'CastError') {
        customError.msg = `Task not found with ${(err.value instanceof Object) ? Object.values(err.value)[0] : err.value}`;
        customError.statusCode = 400;
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })
}


module.exports = errorHanderMiddleware
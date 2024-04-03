const { CustomApiError } = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHanderMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong.'
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })
}


module.exports = errorHanderMiddleware
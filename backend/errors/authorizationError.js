const {StatusCodes} = require('http-status-codes');
const CustomApiError = require('./customApiError')

class AuthorizationError extends CustomApiError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = AuthorizationError
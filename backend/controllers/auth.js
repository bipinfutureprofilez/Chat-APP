const User = require('../models/user');
const { BadRequest, NotFound, AuthorizationError } = require("../errors");
const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')

const register = async (req, res, next) => {
    try {
        const { name, email, password, confirmPassword, gender } = req.body;
        
        if (password !== confirmPassword) {
          throw new BadRequest(`Password didn't matched!`);
        }

        const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${name}`;
        const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${name}`;

        const user = await User.create({
          name,
          email,
          password,
          gender,
          profileImage: gender == "male" ? boyAvatar : girlAvatar,
        });

        const token = user.createToken();

        res.status(StatusCodes.CREATED).json({user: {name: user.name}, token});
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new BadRequest('Please provide username and password!')
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw new NotFound('Credential invalid!');
        }

        const isMatchPassword = user.camparePassword(password);

        if (!isMatchPassword) {
            throw new AuthorizationError("Credential invalid!");
        }

        const token = user.createToken();

        res.status(StatusCodes.OK).json({user: {name: user.name}, token});

    } catch (error) {
        next(error)
    }
}


const logout = async (req, res) => {
    res.send('User logout')
}

module.exports = {
    login,
    register,
    logout
}
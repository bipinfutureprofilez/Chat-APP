const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')

const getUsers = async (req, res) => {
    const {_id: loggedUserId} = req.user;
    const users = await User.find({ _id: { $ne: loggedUserId }}).select('-password');
    res.status(StatusCodes.OK).json({ users });
}


module.exports = {
  getUsers,
};
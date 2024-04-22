const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')

const getUsers = async (req, res) => {
  const {_id: loggedUserId} = req.user;
  var { name } = req.query;
  if (!name) {
    name = '';
  }
  
  // var result = Product.find()
  const users = await User.find({ _id: { $ne: loggedUserId }, name: { $regex: name, $options: 'i'}}).select('-password');
  res.status(StatusCodes.OK).json({ users });
}


module.exports = {
  getUsers,
};
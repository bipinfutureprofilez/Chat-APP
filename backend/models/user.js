const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide username!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide your email!'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter correct email!'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please create new password!'],
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    profileImage: {
        type: String,
        default: '',
    }
})

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
});

userSchema.methods.createToken = function(){
    return jwt.sign(
      { userId: this._id, userName: this.name },
      process.env.JWT_SECRET,
      {expiresIn: '30d'}
    );
}

userSchema.methods.camparePassword = function(candidatePassword){
    isMatch = bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = mongoose.model('user', userSchema)
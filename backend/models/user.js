const mongoose = require('mongoose')

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

module.exports = mongoose.model('User', userSchema)
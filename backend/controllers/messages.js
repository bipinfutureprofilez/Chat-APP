const Conversations = require('../models/conversations');
const Message = require('../models/message');
const { create } = require('../models/user');
const { StatusCodes } = require('http-status-codes')


const messages = async (req, res) => {
    const {message} = req.body;
    const { id: receiverId } = req.params;
    const {_id: senderId} = req.user;
    
    var conversation = await Conversations.findOne({
        participants: { $all: [senderId, receiverId] }
    })

    if (!conversation) {
        console.log(senderId + ' : ' + receiverId);
        conversation = await Conversations.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = await Message.create({
        senderId,
        receiverId,
        message,
    })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }  

    await conversation.save();
    await newMessage.save();

    res.status(StatusCodes.CREATED).json({ newMessage });
}

module.exports = {
    messages
}
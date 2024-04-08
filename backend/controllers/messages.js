const Conversations = require('../models/conversations');
const Message = require('../models/message');
const { StatusCodes } = require('http-status-codes')


const senMessage = async (req, res) => {
    const {message} = req.body;
    const { id: receiverId } = req.params;
    const {_id: senderId} = req.user;
    
    var conversation = await Conversations.findOne({
        participants: { $all: [senderId, receiverId] }
    })

    if (!conversation) {
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

    // await conversation.save();
    // await newMessage.save();

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(StatusCodes.CREATED).json({ newMessage });
}

const getMessages = async (req, res, next) => {
    try {
        const {id: chatWithId} = req.params;
        const {_id: senderId} = req.user;
        
        const conversation = await Conversations.findOne({
          participants: { $all: [senderId, chatWithId] },
        }).populate("messages");

        if (!conversation) {
            res.status(StatusCodes.OK).json([]);
        }

        let messages = conversation.messages;

        res.status(StatusCodes.OK).json(messages);        

    } catch (error) {
        next(error);
    }
}

module.exports = {
  senMessage,
  getMessages,
};
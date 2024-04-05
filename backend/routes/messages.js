const express = require('express')
const router = express.Router()

const { messages } = require('../controllers/messages')

router.route('/send/:id').post(messages)

module.exports = router;
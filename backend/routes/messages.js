const express = require('express')
const router = express.Router()

const { senMessage, getMessages } = require("../controllers/messages");

router.route("/:id").get(getMessages);
router.route("/send/:id").post(senMessage);

module.exports = router;
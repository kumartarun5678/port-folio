const express = require("express");
const { sendEmailController } = require("../Controllers/Controller");

const router = express.Router();

router.post("/sendEmail", sendEmailController);

module.exports = router; 
const express = require("express");
const { sendEmailMsgCtrl } = require("../controllers/emailMsgCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const emailMsgRoute = express.Router();


emailMsgRoute.post("/", authMiddleware, sendEmailMsgCtrl);


module.exports = emailMsgRoute;

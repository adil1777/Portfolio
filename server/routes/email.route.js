const express = require("express");
const { sendEmailController } = require("../controllers/email.controller");

//router
const router= express.Router();

//routes
router.post("/sendEmail", sendEmailController)


//export
module.exports=router;
const express = require("express");
const { sendEmailController } = require("../controllers/email.controller");
const { contactValidation } = require("../validations/contact.validation");

//router
const router= express.Router();

//routes
router.post("/sendEmail",  contactValidation,sendEmailController)


//export
module.exports=router;
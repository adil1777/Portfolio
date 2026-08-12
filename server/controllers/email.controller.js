const statusCodes = require("../utils/statusCodes");
const emailService = require("../services/email.services");
const message = require("../utils/message");

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(statusCodes.BAD_REQUEST).json({
        success: false,
        message: "Please provide all fields",
      });
    }

    await emailService.sendContactEmail({
      name,
      email,
      msg,
    });

    return res.status(statusCodes.OK).json({
      success: true,
      message: message.MESSAGE_SENT_SUCCESSFULLY,
    });

  } catch (error) {
    console.error("[EMAIL] Error:", error);

    return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to send email",
    });
  }
};

module.exports = {
  sendEmailController,
};
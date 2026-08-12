const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error(
      "[EMAIL] SMTP connection failed:",
      error.message
    );
    return;
  }

  console.log("[EMAIL] SMTP server is ready");
});

module.exports = transporter;
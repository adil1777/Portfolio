const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error(`[EMAIL] SMTP connection failed :${error}`.bgRed.white);
  } else {
    console.log(`[EMAIL] SMTP server is ready :${success}`.bgGreen.white);
  }
});

module.exports = transporter;
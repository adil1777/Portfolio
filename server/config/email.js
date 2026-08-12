const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});


transporter.verify()
  .then(() => {
    console.log("[EMAIL] SMTP server is ready");
  })
  .catch((err) => {
    console.error("[EMAIL] SMTP verify failed:", err.message);
  });

module.exports = transporter;
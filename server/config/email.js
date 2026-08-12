const nodemailer = require("nodemailer");

console.log("[EMAIL CONFIG] FILE LOADED");
console.log("[EMAIL CONFIG] SMTP_MAIL exists:", Boolean(process.env.SMTP_MAIL));
console.log("[EMAIL CONFIG] SMTP_PASS exists:", Boolean(process.env.SMTP_PASS));

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

console.log("[EMAIL CONFIG] Transporter created");

transporter.verify()
  .then(() => {
    console.log("[EMAIL CONFIG] SMTP server is ready");
  })
  .catch((error) => {
    console.error("[EMAIL CONFIG] SMTP verification failed:", error.message);
  });

module.exports = transporter;
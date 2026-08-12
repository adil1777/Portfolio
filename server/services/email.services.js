const transporter = require("../config/email");

console.log("SMTP_MAIL exists:", Boolean(process.env.SMTP_MAIL));
console.log("SMTP_PASS exists:", Boolean(process.env.SMTP_PASS));

const sendContactEmail = async ({ name, email, msg }) => {
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_MAIL,
    replyTo: email,
    subject: "Regarding MERN Portfolio App",
    html: `
      <h3>Contact Form</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Message:</strong> ${msg}</li>
      </ul>
    `,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendContactEmail,
};
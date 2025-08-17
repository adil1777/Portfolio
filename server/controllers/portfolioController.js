const nodemailer = require("nodemailer");

// Transport
const dotenv = require("dotenv")

dotenv.config();

const appEmail = process.env.SMTP_MAIL;
const appPassword = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: appEmail,
    pass: appPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmailController = async (req, res) => {
  try {
     console.log( req.body,"1111111111111111111111111111111");
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: 'Please Provide All Fields',
      });
    }

    // Email content
    const mailOptions = {
      from: email,
      to: appEmail,
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.error("Error:", error);

    return res.status(500).send({
      success: false,
      message: 'Failed to send email',
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };

const { Resend } = require("resend");
const messages = require("../utils/message");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, msg }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.SMTP_MAIL],
      replyTo: email,
      subject: messages.MESSAGE_FROM_MERN_PORTFOLIO,

      html: `
        <h3>New Contact Message</h3>

        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Message:</strong> ${msg}</li>
        </ul>
      `,
    });

    if (error) {
      console.error("[EMAIL SERVICE] Resend error:", error);

      throw new Error(error.message || "Failed to send email");
    }

    console.log("[EMAIL SERVICE] Email sent successfully:", data.id);

    return data;
  } catch (error) {
    console.error("[EMAIL SERVICE] Failed to send email:", error.message);

    throw error;
  }
};

module.exports = {
  sendContactEmail,
};


// const transporter = require("../config/email");

// console.log("SMTP_MAIL exists:", Boolean(process.env.SMTP_MAIL));
// console.log("SMTP_PASS exists:", Boolean(process.env.SMTP_PASS));

// const sendContactEmail = async ({ name, email, msg }) => {
//   const mailOptions = {
//     from: process.env.SMTP_MAIL,
//     to: process.env.SMTP_MAIL,
//     replyTo: email,
//     subject: "Regarding MERN Portfolio App",
//     html: `
//       <h3>Contact Form</h3>
//       <ul>
//         <li><strong>Name:</strong> ${name}</li>
//         <li><strong>Email:</strong> ${email}</li>
//         <li><strong>Message:</strong> ${msg}</li>
//       </ul>
//     `,
//   };

//   return transporter.sendMail(mailOptions);
// };

// module.exports = {
//   sendContactEmail,
// };


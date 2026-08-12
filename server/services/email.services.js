const { Resend } = require("resend");
const messages = require("../utils/message");
const contactEmailTemplate = require("../templates/contactEmail.template");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactEmail = async ({ name, email, msg }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.SMTP_MAIL],
      replyTo: email,
      subject: messages.MESSAGE_FROM_MERN_PORTFOLIO,

      html: contactEmailTemplate({
        name,
        email,
        msg,
      }),
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



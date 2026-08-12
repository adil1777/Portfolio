const yup = require("yup");

const contactValidation = async (req, res, next) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters long")
      .max(100, "Name must not exceed 100 characters")
      .required("Name is required"),

    email: yup
      .string()
      .trim()
      .lowercase()
      .max(100, "Email must not exceed 100 characters")
      .required("Email is required")
      .email("Invalid email"),

    msg: yup
      .string()
      .trim()
      .min(5, "Message must be at least 5 characters long")
      .max(5000, "Message must not exceed 5000 characters")
      .required("Message is required"),
  });

  try {
    await schema.validate(req.body, {
      abortEarly: true,
      stripUnknown: true,
    });

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  contactValidation,
};
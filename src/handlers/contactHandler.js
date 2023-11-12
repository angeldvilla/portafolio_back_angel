const nodemailer = require("nodemailer");
const config = require("../../config");
const transporter = nodemailer.createTransport(config.email);

// Función para enviar correo electrónico
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: "tu-correo@gmail.com",
      to,
      subject,
      text,
    });
    console.log("Correo electrónico enviado:", info.messageId);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};

module.exports = { sendEmail };

const express = require("express");
const contactRoutes = express.Router();

//*HANDLERS
const sendEmail = require("../handlers/contactHandler");


contactRoutes.post("/", async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await sendEmail(to, subject, message);

    res.status(200).json({ message: "Correo electrónico enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});

module.exports = contactRoutes;

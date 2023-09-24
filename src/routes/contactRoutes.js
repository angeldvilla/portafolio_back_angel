const express = require("express");
const contactRoutes = express.Router();

//*HANDLERS
const emailContact = require("../handlers/contactHandler");

contactRoutes.get("/", emailContact);

module.exports = contactRoutes;

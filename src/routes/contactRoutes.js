const { Router } = require('express');
const contactRoutes = Router();

//*HANDLERS
/* const { emailContact } = require('../handlers/contactHandler'); */

contactRoutes.get('/', emailContact);


module.exports = contactRoutes
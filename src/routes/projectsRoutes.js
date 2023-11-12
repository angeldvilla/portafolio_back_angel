const express = require('express');
const projectsRoutes = express.Router();

//*HANDLERS
const allProjectsHandler = require('../handlers/allProjectsHandler');

projectsRoutes.get('/', allProjectsHandler);


module.exports = projectsRoutes
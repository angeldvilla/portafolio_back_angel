const { Router } = require('express');
const projectsRoutes = Router();

//*HANDLERS
/* const { allProjectsHandler } = require('../handlers/projectsHandler'); */

projectsRoutes.get('/', allProjectsHandler);


module.exports = projectsRoutes
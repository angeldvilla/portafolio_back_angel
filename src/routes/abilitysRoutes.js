const { Router } = require('express');
const abilitysRoutes = Router();

//*HANDLERS
/* const { allAbilitys } = require('../handlers/abilitysHandler'); */

abilitysRoutes.get('/', allAbilitys);


module.exports = abilitysRoutes
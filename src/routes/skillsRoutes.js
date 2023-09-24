const express = require('express');
const skillsRouter = express.Router();

//*HANDLERS
const allSkills  = require('../handlers/allSkillsHandler');

skillsRouter.get('/', allSkills);


module.exports = skillsRouter
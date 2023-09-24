const express = require('express');
const router = express.Router();

const projectsRoutes = require('./projectsRoutes');
const skillsRoutes = require('./skillsRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/projects', projectsRoutes);
router.use('/skills', skillsRoutes);
router.use('/contact', contactRoutes);


module.exports = router;
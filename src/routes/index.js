const { Router } = require('express');
const router = Router();

const projectsRoutes = require('./projectsRoutes');
const abilitysRoutes = require('./abilitysRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/projects', projectsRoutes);
router.use('/abilitys', abilitysRoutes);
router.use('/contact', contactRoutes);


module.exports = router;
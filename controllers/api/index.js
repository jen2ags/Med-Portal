const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const appointmentRoutes = require('./appointment-routes');
const noteRoutes = require('./note-routes');
const patientRoutes = require('./patient-routes.js');

router.use('/users', userRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/notes', noteRoutes);
router.use('/patients', patientRoutes);

module.exports = router;
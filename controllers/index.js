const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

const appointmentRoutes = require('./appointment-routes.js');

const viewAllRoutes = require('./view-all-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/view-all', viewAllRoutes);

router.use((req,res) => {
    res.status(404).end();
});



module.exports = router;
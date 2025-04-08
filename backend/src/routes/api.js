const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const bookingController = require('../controllers/bookingController');

router.get('/vehicle-types', vehicleController.getVehicleTypes);
router.get('/vehicles', vehicleController.getVehicles);
router.post('/book', bookingController.bookVehicle);

module.exports = router;
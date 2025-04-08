// controllers/bookingController.js
const { Booking } = require('../models');
const { Sequelize } = require('sequelize');

exports.bookVehicle = async (req, res) => {
  try {
    const { firstName, lastName, startDate, endDate, vehicleId } = req.body;

    // Input validation
    if (!firstName || !lastName || !startDate || !endDate || !vehicleId) {
      return res.status(400).json({ message: 'All fields (firstName, lastName, startDate, endDate, vehicleId) are required.' });
    }

    if (new Date(endDate) < new Date(startDate)) {
      return res.status(400).json({ message: 'End date cannot be earlier than start date.' });
    }

    // Check for overlapping bookings
    const overlapping = await Booking.findOne({
      where: {
        VehicleId: vehicleId,
        [Sequelize.Op.or]: [
          {
            startDate: {
              [Sequelize.Op.between]: [startDate, endDate],
            },
          },
          {
            endDate: {
              [Sequelize.Op.between]: [startDate, endDate],
            },
          },
          {
            [Sequelize.Op.and]: [
              { startDate: { [Sequelize.Op.lte]: startDate } },
              { endDate: { [Sequelize.Op.gte]: endDate } },
            ],
          },
        ],
      },
    });

    if (overlapping) {
      return res.status(409).json({ message: 'Vehicle is already booked for the selected date range.' });
    }

    // Create booking
    await Booking.create({
      firstName,
      lastName,
      startDate,
      endDate,
      VehicleId: vehicleId,
    });

    return res.status(201).json({ message: 'Booking successful.' });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ message: 'Internal server error. Please try again later.' });
  }
};

const { VehicleType, Vehicle } = require('../models');

exports.getVehicleTypes = async (req, res) => {
  try {
    const { wheels } = req.query;

    if (!wheels) {
      return res.status(400).json({ message: 'Missing wheels parameter' });
    }

    const types = await VehicleType.findAll({ where: { wheels } });

    if (!types || types.length === 0) {
      return res.status(404).json({ message: 'No vehicle types found for given wheels' });
    }

    res.status(200).json(types);
  } catch (error) {
    console.error('Error fetching vehicle types:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const { typeId } = req.query;

    if (!typeId) {
      return res.status(400).json({ message: 'Missing typeId parameter' });
    }

    const vehicles = await Vehicle.findAll({ where: { VehicleTypeId: typeId } });

    if (!vehicles || vehicles.length === 0) {
      return res.status(404).json({ message: 'No vehicles found for given typeId' });
    }

    res.status(200).json(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const { sequelize, VehicleType, Vehicle } = require('../models');
(async () => {
  await sequelize.sync({ force: true });
  const hatchback = await VehicleType.create({ name: 'Hatchback', wheels: 4 });
  const suv = await VehicleType.create({ name: 'SUV', wheels: 4 });
  const sedan = await VehicleType.create({ name: 'Sedan', wheels: 4 });
  const cruiser = await VehicleType.create({ name: 'Cruiser', wheels: 2 });
  const sports = await VehicleType.create({ name: 'Sports', wheels: 2 });

  await hatchback.createVehicle({ model: 'Maruti Alto' });
  await suv.createVehicle({ model: 'Hyundai Creta' });
  await sedan.createVehicle({ model: 'Honda City' });
  await cruiser.createVehicle({ model: 'Royal Enfield' });
  await sports.createVehicle({ model: 'Yamaha R15' });
})();
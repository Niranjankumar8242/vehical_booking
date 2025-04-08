require('dotenv').config({ path: __dirname + '/../../.env' });

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'mysql',
});

console.log(process.env.DB_URL,"dburl")
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });


const VehicleType = sequelize.define('VehicleType', {
  name: DataTypes.STRING,
  wheels: DataTypes.INTEGER,
});

const Vehicle = sequelize.define('Vehicle', {
  model: DataTypes.STRING,
});

const Booking = sequelize.define('Booking', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
});

VehicleType.hasMany(Vehicle);
Vehicle.belongsTo(VehicleType);
Vehicle.hasMany(Booking);
Booking.belongsTo(Vehicle);

module.exports = { sequelize, VehicleType, Vehicle, Booking };
const { sequelize } = require('./src/models');
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synchronized successfully.');
    process.exit();
  } catch (err) {
    console.error('❌ Failed to synchronize database:', err);
    process.exit(1);
  }
})();

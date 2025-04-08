module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('VehicleTypes', {
        id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        name: Sequelize.STRING,
        wheels: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('VehicleTypes');
    },
  };
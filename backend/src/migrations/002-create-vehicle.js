module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Vehicles', {
        id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        model: { type: Sequelize.STRING },
        VehicleTypeId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'VehicleTypes',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('Vehicles');
    }
  };
  
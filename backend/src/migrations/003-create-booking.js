module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Bookings', {
        id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        startDate: { type: Sequelize.DATE },
        endDate: { type: Sequelize.DATE },
        VehicleId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Vehicles',
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
      await queryInterface.dropTable('Bookings');
    }
  };
  
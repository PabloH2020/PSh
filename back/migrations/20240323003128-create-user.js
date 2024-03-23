'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stats', {
      statId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
      },
      playerId: {
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV1
      },
      nickname: {
        type: Sequelize.STRING
      },
      profileImage: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      statdate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stats');
  }
};
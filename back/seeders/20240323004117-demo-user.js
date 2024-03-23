'use strict';
const uuid = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date();
    return queryInterface.bulkInsert('stats', [{
      statId:uuid.v4(),
      playerId:uuid.v1(),
      nickname: 'master51',
      profileImage: 'https://randomuser.me/api/portraits/thumb/women/5.jpg',
      score: 20,
      statdate: date,
    },
    {
      statId:uuid.v4(),
      playerId:uuid.v1(),
      nickname: 'sadfrog129',
      profileImage: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
      score: 74,
      statdate: date,
    },
    {
      statId:uuid.v4(),
      playerId:uuid.v1(),
      nickname: 'blackmouse482',
      profileImage: 'https://randomuser.me/api/portraits/thumb/men/37.jpg',
      score: 88,
      statdate: date,
    },{
      statId:uuid.v4(),
      playerId:uuid.v1(),
      nickname: 'heavyzebra451',
      profileImage: 'https://randomuser.me/api/portraits/thumb/men/27.jpg',
      score: 57,
      statdate: date,
    },
    {
      statId:uuid.v4(),
      playerId:uuid.v1(),
      nickname: 'yellowlion635',
      profileImage: 'https://randomuser.me/api/portraits/thumb/men/31.jpg',
      score: 26,
      statdate: date,
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stats', null, {});
  }
};

'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'User 1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'User 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'User 3',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

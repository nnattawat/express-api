'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'Task 1',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Task 2',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Task 3',
      userId: 1,
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

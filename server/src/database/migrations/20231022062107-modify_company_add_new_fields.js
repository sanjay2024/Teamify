'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.addColumn('Companies','no_of_employee',{
          type:Sequelize.INTEGER,
          allowNull:true
      })
  },

  async down (queryInterface, Sequelize) {
       await queryInterface.removeColumn("Companies", "no_of_employee");
  }
};

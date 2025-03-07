'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Spots',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Users',
          key:'id'
        },
        onDelete:'CASCADE'
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    },options);

  //  await queryInterface.addConstraint('Bookings',{
  //   fields:['spotId','userId','startDate','endDate'],
  //   type:'unique'
  //  },options);

  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint('Bookings',{
    //   fields:['spotId','userId','startDate','endDate'],
    //   type:'unique'
    //  });
    // await queryInterface.removeConstraint('Bookings', 'Bookings_spotId_userId_startDate_endDate_uk',options);
    await queryInterface.dropTable('Bookings',options);
   
 

  }
};
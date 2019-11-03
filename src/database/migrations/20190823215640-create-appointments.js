'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      user_id: {
        //tab onde o campo sera criado
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, //tabela e campo de referencia FK
        onUpdate: 'CASCADE', //se for alterado em files altera também em useres
        onDelete: ' SET NULL', //se apagar na tabela files seta como null na users
        allowNull: true, //permite null
      },
      provider_id: {
        //tab onde o campo sera criado
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' }, //tabela e campo de referencia FK
        onUpdate: 'CASCADE', //se for alterado em files altera também em useres
        onDelete: ' SET NULL', //se apagar na tabela files seta como null na users
        allowNull: true, //permite null
      },
      canceled_at: {
        type: Sequelize.DATE,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('appointments');
  },
};

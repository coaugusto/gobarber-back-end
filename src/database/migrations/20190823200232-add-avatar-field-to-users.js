'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      //tab onde o campo sera criado
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' }, //tabela e campo de referencia FK
      onUpdate: 'CASCADE', //se for alterado em files altera também em useres
      onDelete: ' SET NULL', //se apagar na tabela files seta como null na users
      allowNull: true, //permite null
    });
  },

  down: queryInterface => {
    return queryInterface.removeColum('users', 'avatar_id');
  },
};

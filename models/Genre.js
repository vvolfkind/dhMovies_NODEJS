module.exports = (sequelize, Sequelize) => {
    const Genre = sequelize.define('Genre', {
      name: Sequelize.STRING,
    }, {
      timestamps: true,
      underscored: true
    });

    return Genre
  }
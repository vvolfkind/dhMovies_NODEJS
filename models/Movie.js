module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define('Movie', {
      title: Sequelize.STRING,
      rating: Sequelize.FLOAT,
      awards: Sequelize.INTEGER,
      release_date: Sequelize.STRING,
      // Otras opciones (aceptar NULL)
      length: { 
        type: Sequelize.INTEGER, 
        allowNull: true
      },
      // Foreign Keys!
      genre_id: {
        type: Sequelize.INTEGER, 
        references: {
          model: sequelize.Genre,
          key: 'id',
        }
      }
    },{
      timestamps: true,
      underscored: true
      });
      // Asociar modelos por foreign_key
      Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {foreignKey: 'genre_id'});
      }
    return Movie
};
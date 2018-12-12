module.exports = (sequelize, Sequelize) => {
  const Actor = sequelize.define('Actor', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    rating: Sequelize.FLOAT,
    favorite_movie_id: {
      type: Sequelize.INTEGER,
      references: {
        model: sequelize.Movie,
        key: 'id',
        allowNull: true
      }
    },
  },{
    timestamps: true,
    created_at: 'created_at',
    updatedAt: 'updated_at'
  });

  return Actor
}
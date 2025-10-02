import { Sequelize } from 'sequelize';
import db from '../config.js';

const { DataTypes } = Sequelize;

const Artworks = db.define('artworks', {
  artwork_title: {
    type: DataTypes.STRING,
  },
  artwork_year: {
    type: DataTypes.INTEGER,
  },
  media: {
    type: DataTypes.STRING,
  },
});

Artworks.associate = (models) => {
  Artworks.hasMany(models.Locations, { foreignKey: 'id_artworks' });
  Artworks.belongsTo(models.Artists, { foreignKey: 'id_artists' });
};

export default Artworks;

import { Sequelize } from 'sequelize';
import db from '../config.js';

const { DataTypes } = Sequelize;

const Artists = db.define('artists', {
  artist_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  biography: {
    type: DataTypes.TEXT,
  },
});

Artists.associate = (models) => {
  Artists.hasMany(models.Artworks, { foreignKey: 'id_artists' });
};

export default Artists;

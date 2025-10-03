import { Sequelize } from 'sequelize';
import db from '../config.js';

const { DataTypes } = Sequelize;

const Locations = db.define('locations', {
  location_name: {
    type: DataTypes.STRING,
  },
  location_address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
});

Locations.associate = (models) => {
  Locations.hasMany(models.Artworks, { foreignKey: 'id_locations' });
  Locations.hasMany(models.Tickets, { foreignKey: 'id_locations' });
};

export default Locations;

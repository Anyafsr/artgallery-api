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
  Locations.belongsTo(models.Artworks, { foreignKey: 'id_artworks' });
  Locations.belongsTo(models.Tickets, { foreignKey: 'id_tickets' });
};

export default Locations;

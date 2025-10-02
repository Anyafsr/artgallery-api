import { Sequelize } from 'sequelize';
import db from '../config.js';

const { DataTypes } = Sequelize;

const Visitors = db.define('visitors', {
  visitor_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

Visitors.associate = (models) => {
  Visitors.hasMany(models.Tickets, { foreignKey: 'id_visitor' });
};

export default Visitors;

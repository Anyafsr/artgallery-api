import { Sequelize } from 'sequelize';
import db from '../config.js';

const { DataTypes } = Sequelize;

const Tickets = db.define('tickets', {
  ticket_code: {
    type: DataTypes.STRING,
  },
  purchase_date: {
    type: DataTypes.DATE,
  },
  ticket_price: {
    type: DataTypes.FLOAT,
  },
});

Tickets.associate = (models) => {
  Tickets.belongsTo(models.Visitors, { foreignKey: 'id_visitor' });
};

export default Tickets;

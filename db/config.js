import { Sequelize } from 'sequelize';

const db = new Sequelize('artgallery_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

export default db;

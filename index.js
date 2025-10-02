import express from 'express';
import bodyParser from 'body-parser';
import db from './db/config.js';
import { initDatabase } from './utils/DatabaseInit.js';
import router from './routers/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const startServer = async () => {
  try {
    await db.authenticate();
    await initDatabase();
    console.log('Database Connected...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit process with failure
  }

  app.listen(port, () => console.log(`Server is running on port ${port}`));
  app.use(router);
};

startServer();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

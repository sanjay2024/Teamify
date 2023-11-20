import express from "express";
import { PORT } from "./config/config";
import { expressApp } from "./expressApp";
import db from '../src/database/models'
const startServer = async () => {
  const app = express();
  try {
    await db.sequelize.authenticate();
    console.log("Connected to the database");
  } catch (error) {
    console.log("Unable to connect to database");
  }
  expressApp(app);
  try {
    app.listen(PORT, () => {
      console.log(`server is running in ${PORT}`);
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
};

startServer();


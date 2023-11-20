'use strict';

const fs = require('fs');
const path = require('path');
import * as seq from "sequelize";
import process from "process";
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db:any = {};
let sequelize: seq.Sequelize = new seq.Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
fs
  .readdirSync(__dirname)
  .filter((file: string) => {
     return (
       file.indexOf(".") !== 0 &&
       file !== basename &&
       (file.slice(-3) === ".ts" || file.slice(-3) === ".js") &&
       (file.indexOf(".test.ts") === -1 || file.indexOf(".test.js") === -1)
     );
  }).forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, seq.DataTypes);
    db[model.name] = model;
  });
  
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = seq.Sequelize;

export default db;

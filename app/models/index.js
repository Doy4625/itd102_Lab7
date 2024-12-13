const config = require('../config/db');

const datatype = require('sequelize');
const sequelize = new datatype(
    config.DB, 
    config.USER, 
    config.PASSWORD, 
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};

db.datatype = datatype;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize)(datatype);

module.exports = db;
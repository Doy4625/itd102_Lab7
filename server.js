require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 5000;

//DB connection
const db = require('./app/models');
db.sequelize.sync({force: false}).then(()=>{
    console.log("DB Connected..");
});
//ROUTES
require('./app/routes/user.route')(app);

app.listen(PORT, () => console.log('Server is running ' + PORT));
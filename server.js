const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Models
// Don't drop db by default
const db = require("./models");
const syncOptions = { force: false };

// api routes
require('./routes/todos')(app);


// set db to sync and then spin up server
db.sequelize.sync(syncOptions).then(() => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
});

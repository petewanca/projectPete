const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Models
// Don't drop db by default
const db = require("./models");
const syncOptions = { force: false };

// routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

// send todo list to front end on route hit
app.use('/api/todos', (req, res) => {
    // local variable for todos until db is set up...
    const todos = [
        {
            id: 1,
            title: 'get bread from grocery',
            completed: false
        },
        {
            id: 2,
            title: 'take trash out',
            completed: false
        },
        {
            id: 3,
            title: 'call grandma',
            completed: true
        },
        {
            id: 4,
            title: 'go over family budget',
            completed: false
        },
        {
            id: 5,
            title: 'invest in cryptocurrency in 2005',
            completed: false
        },
        {
            id: 6,
            title: 'create a viral meme in 2011',
            completed: true
        },
        {
            id: 7,
            title: 'make a social networking app that dehumanizes human interaction',
            completed: false
        },
        {
            id: 8,
            title: 'did I stutter? get bread from grocery',
            completed: true
        }
    ]
    
    res.json(todos);
});


// set db to sync and then spin up server
db.sequelize.sync(syncOptions).then(() => {
    app.listen(port, () => console.log(`server up on http://localhost:${port}`));
});

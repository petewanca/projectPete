// dependencies
const express = require('express');
const app = express();

// declare port #
const port = 5000;



// // Define Models
// var db = require("./models");
// // Don't drop db by default
// var syncOptions = { force: false };


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
// db.sequelize.sync(syncOptions).then(() => {
app.listen(port, () => console.log(`server up on http://localhost:${port}`));
// });

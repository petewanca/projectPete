// dependencies
const express = require('express');
const app = express();

// declare port #
const port = 5000;

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

app.use('/api/todos', (req, res) => {
    res.json(todos);
});

app.listen(port, () => console.log(`server up on http://localhost:${port}`));
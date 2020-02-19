const express = require('express');
const router = express.Router();

// login page
router.get('/login', (req, res) => res.send('Login'));

// register
router.get('/register', (req, res) => res.send('register'));

module.exports = router;
const express = require('express');
require('dotenv').config();
const router = express.Router();
const userService = require('../services/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userService.login(username, password);
        const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_KEY)
        res.send(`Token: ${token}`)
    } catch (err) {
        res.status(401).send('Invalid Credentials')
    }
})

router.post('/logout', async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Unable to log out')
        }
        res.send('Logout successful');
    })
})

module.exports = router;
const userService = require('../services/user');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.saveNewUser(username, password);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userService.getUser(userId);
        if (!user) {
            res.status(404).send('User not found')
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
};
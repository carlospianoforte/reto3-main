const cardService = require('../services/card');

const createCard = async (req, res) => {
    try {
        const { name, age, sex, date, description } = req.body;
        const card = await cardService.saveNewCard(name, age, sex, date, description);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCard = async (req, res) => {
    try {
        const cardId = req.params.id;
        const card = await cardService.getCard(cardId);
        if (!card) {
            res.status(404).send('Card not found');
        }
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCards = async (req, res) => {
    try {
        const cards = await cardService.getCards();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCard = async (req, res) => {
    try {
        const card = await cardService.updateCard(req.params.id, req.body);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCard,
    getCard,
    getCards,
    updateCard,
};
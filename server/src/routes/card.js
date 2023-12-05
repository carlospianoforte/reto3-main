const express = require('express');
const router = express.Router();
const Cardservice = require('../services/card')

const cardservice = new Cardservice();

router.get('/', async (req, res) => {
  try {
    const Cards = await cardservice.getCards()
    res.json(Cards)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server Error')
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, age, sex, date, description } = req.body;
    await cardservice.saveNewcard(name, age, sex, date, description)
    res.status(201).send('New Card date added successfully')
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server Error')
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    const { name, age, sex, date, description } = req.body;
    await cardservice.updatecard(cardId, name,age, sex, date, description );
    res.status(201).send('New Card date updated successfully')

  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server Error')
  } 
});

router.put('/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    const { name, age, sex, date, description } = req.body;
    await cardservice.upsertcard(cardId, name,age, sex, date, description);
    res.status(204).send('New Card date updated successfully')

  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server Error')
  } 
});

router.delete('/:id', async (req, res) => {
  try {
    const cardId = req.params.id;
    await cardservice.deletecard(cardId)
    res.status(204).send('New Card date delete successfully')
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal Server Error')
  } 
});

module.exports = router;
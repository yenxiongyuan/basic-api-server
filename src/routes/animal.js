'use strict';

const express = require('express');
// equivalent statements with the import
// const animalModel = require('../models/index');
const { animalModel } = require('../models');

const router = express.Router();

router.get('/animal', async (req, res, next) => {
  const animals = await animalModel.findAll();
  res.status(200).send(animals);
});

router.post('/animal', async (req, res, next) => {
  try {
    const newAnimal = await animalModel.create(req.body);
    res.status(200).send(newAnimal);
  } catch(e){
    next(e);
  }
});



module.exports = router;


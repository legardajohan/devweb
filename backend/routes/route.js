const express = require('express');
// const mongoose = require('mongoose');
const bookController = require('../controllers/controller');

const router = express.Router();

router.post('/', bookController.create);

router.get('/', bookController.list);

module.exports = router; 
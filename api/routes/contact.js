const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/contact');
const contactController = require('../controllers/contact');

router.get('/',contactController.getAllContacts);

router.get('/:id',contactController.getById);

router.post('/',contactController.addContact);

router.delete('/:id',contactController.deleteContact);

router.patch('/:id', contactController.updateContact);

module.exports = router;
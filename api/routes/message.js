const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');

router.get('/',messageController.getMessages);

router.post('/',messageController.addMessage);

router.get('/:id',messageController.getMessageById);

router.patch('/:id',messageController.updateMessage);

router.delete('/:id',messageController.deleteMessage);

module.exports = router;
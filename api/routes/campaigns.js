const mongoose = require('mongoose');
const CampController = require('../controllers/campaigns');
const express = require('express');
const router = express.Router();

router.get('/',CampController.getCampaigns);

module.exports = router;
const mongoose = require('mongoose');
const CampController = require('../controllers/campaigns');
const express = require('express');
const router = express.Router();

router.get('/',CampController.getCampaigns);

router.get('/:id',CampController.getById);

router.patch('/:id',CampController.updateCampaign);

router.post('/:id',CampController.addCampaign);

router.post('/:id',CampController.launchCampaign);

router.post('/:id',CampController.copyCampaign);

router.delete('/:id',CampController.deleteCampaign);

router.get('/:status',CampController.getByStatus);

module.exports = router;
const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace');

router.get('/',workspaceController.getWorkspaces);

router.post('/',workspaceController.addWorkspace);

router.delete('/:id',workspaceController.deleteWorkspace);

module.exports = router;
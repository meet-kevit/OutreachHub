const express = require('express');
const router = express.Router();
const monoose = require('mongoose');
const Workspace = require('../models/Workspace');

router.get('/',(req,res,next) => {
    Workspace.find()
    .then(wos => {
        res.status(200).json({
            Workspaces:wos.map(doc => ({
                data:doc
            }))
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
})

module.exports = router;
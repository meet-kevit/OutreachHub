const mongoose = require('mongoose');
const log = require('../models/logout');

exports.logOut = (req,res,next) => {
    const token = req.headers.authorization;
    log.insertOne({token:token})
    .then(resu => {
        res.status(200).json({
            message:"Token blacklisted"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(401).json({
            error:err
        })
    })
}
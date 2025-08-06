const mongoose = require('mongoose');
const msg = require('../models/message');

exports.getMessages = (req,res,next) =>{
    res.status(200).json({
        message:"GET Working"
    })
}
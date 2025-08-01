const mongoose = require('mongoose');
const Contact = require('../models/contact');

exports.getAllContacts = (req,res,next) => {
    Contact.find()
    .exec()
    .then(cons => {
        res.status(200).json({
            contacts:cons.map(doc => ({
                data : doc
            }))
        })
    })
    .catch(err => { 
        res.status(401).json({
            error:err
        })
    })
};

exports.getById = (req,res,next) => {
    const id = req.params.id;
    Contact.findOne({_id:id})
    .exec()
    .then(cons => {
        res.status(200).json({
            data:cons
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
};

exports.addContact = (req,res,next) => {
    const contact =  req.body;
    contact._id = new mongoose.Types.ObjectId();
    const newcon = new Contact(contact);
    newcon.save()
    .then(result => {
        res.status(201).json({
            message:"Contact created!",
            data:result
        })
    })
    .catch(err => {
        
        res.status(401).json({  
            error:err
        })
    })
};

exports.deleteContact = (req,res,next) =>{
    const id = req.params.id;
    Contact.deleteOne({_id:id})
    .exec()
    .then(result => {
        res.status(200).json({
            message:"Contact deleted"
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
};

exports.updateContact = (req,res,next) =>{
    Contact.updateOne({_id:req.params.id},{$set:req.body})
    .exec()
    .then(result => {
        res.status(200).json({
            message:"Contact upated",
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
};
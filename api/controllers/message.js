const mongoose = require('mongoose');
const Msg = require('../models/message');

exports.getMessages = (req,res,next) =>{
    Msg.find()
    .select('type content name workspaceId')
    .populate('workspaceId')
    .exec()
    .then(data => {
        res.status(200).json({
            Messages: data.map(doc => ({
                Message:doc
            }))
        })
    })
    .catch(error => {
        console.log(error);
        res.status(401).json({
            error:error
        })
    })
}

exports.getMessageById = (req,res,next)=> {
    const id = req.params.id;
    Msg.findOne({_id:id})
    .exec()
    .then(ans => {
        res.status(200).json({
            message:ans
        })
    })
    .catch(err => {
        res.status(401).json({
           error:err
        })
    })
}

exports.addMessage = (req,res,next) => {
    const newMsg = req.body;
    newMsg._id = new mongoose.Types.ObjectId;
    const add = new Msg(newMsg);

    add.save()
    .then(ans => {
         res.status(200).json({
            message:"Message template created!",
            data:ans
         })
    })
    .catch(error => {
        console.log(error);
        res.status(401).json({
            error:error
        })
    })
};

exports.updateMessage = (req,res,next) => {
    const id = req.params.id;
    Msg.updateOne({_id:id},{$set:req.body})
    .exec()
    .then(ans => {
        res.status(200).json({
            message:"Message Updated"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.deleteMessage = (req,res,next) => {
    const id = req.params.id;

    Msg.deleteOne({_id:id})
    .exec()
    .then(ans => {
          res.status(200).json({
            message:"Message deleted"
          })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}
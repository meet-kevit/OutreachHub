const mongoose = require('mongoose');
const Workspace = require('../models/workspace');

exports.getWorkspaces = (req,res,next) => {
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
}

exports.addWorkspace = (req,res,next) => {
    const add = new Workspace({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        createdBy:req.body.createdBy
    });
    add.save()
    .then(result => {
        res.status(200).json({
            message:"Workspace created!"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(401).json({
            error:err
        })
    });
}

exports.deleteWorkspace = (req,res,next) =>{
    const id = req.params.id;
    Workspace.deleteOne({_id:id})
    .then(result => {
        res.status(200).json({
            message:"Workspace deleted!"
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
}
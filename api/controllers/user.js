const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = (req,res,next) => {
    User.find()
    .select('_id username workspaces businessId createdAt role right')
    .then(users => {
        res.status(200).json({
            users:users.map(doc => ({
                user:doc,
            }))
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
};

exports.signupUser = (req,res,next) => {

    User.find({username:req.body.username})
    .exec()
    .then(user => {
        if(user.length >=1){
            return res.status(409).json({
                message:"Username already exists!"
            })
        }
        else{
            bcrypt.hash(req.body.password,10, (err,hash) => {
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                username:req.body.username,
                password:hash,
                workspaces:Array.isArray(req.body.workspaces) ? req.body.workspaces : [],
                businessId: req.body.businessId || null,
            });
            user.save()
            .then(result => {
                res.status(201).json({
                    message:"Signup successful",
                    data:result
                })
            })
            .catch(err =>{
                res.status(500).json({
                    error:err
                })
            })
        }
    })
        }
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    });
    
};

exports.deleteUser = (req,res,next) => {
    const id = req.params.uid;
    User.deleteOne({_id:id})
    .exec()
    .then(result => {
        res.status(200).json({
            message:"User deleted"
        })
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
};

exports.loginUser = (req,res,next) => {
    User.findOne({username:req.body.username})
    .exec()
    .then(user => {
        if(user === null){
            res.status(401).json({
               message:"Auth failed"
            })
        }
        else{
            bcrypt.compare(req.body.password,user.password,(err,result) => {
                if(err){
                    res.status(401).json({
                        message:"Auth failed",
                        ord:1
                    })
                }
                else{
                    if(result){
                        const token = jwt.sign({
                            username:user.username,
                            id:user._id
                        },process.env.JWT_KEY,{
                            expiresIn:"1h"
                        });
                        req.body.token = token;
                        res.status(200).json({
                            message:"Login successsful,,",
                            user:user,
                            token:token
                        })
                    }
                    else{
                         res.status(401).json({
                        message:"Auth failed",
                        ord:1
                    })
                    }
                }
            })
        }
    })
}; 

exports.updateUser = (req,res,next) => {
    User.updateOne({_id:req.params.uid},{$set:req.body})
    .exec()
    .then(result => {
        res.status(200).json({
            message:"User updated",
            data:req.body
        })
    })
    .catch(err => {
        res.status(401).json({
            error:err
        })
    })
};

exports.getById = (req,res,next) => {
    const id = req.params.uid;
    User.findById(id)
    .select('_id username workspaces businessId createdAt role right')
    .then(user => {
        if(user){
            res.status(200).json({
                user:user
            })
        }
        else{
            res.status(404).json({
                message:"User not found"
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            error:err
        })
    })
};
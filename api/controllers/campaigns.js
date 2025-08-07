const Camp = require('../models/campaigns');
const mongoose = require('mongoose');

exports.getCampaigns = (req,res,next) => {

    Camp.find()
    .select('_id name status content tags createdById workspaceId')
    .populate()
    .then(ans => {
        res.status(200).json({
          campaigns: ans.map(doc => ({
              campaigns:doc
          }))
      })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.getById = (req,res,next) => {

  Camp.findOne({_id:req.params.id})
  .then(ans => {
     res.status(200).json({
        campaign:ans
     })
  })
  .catch(error => {
    res.status(401).json({
        error:error
    })
  })
}

exports.getByStatus = (req,res,next) => {

  Camp.findOne({status:req.params.status})
  .then(ans => {
     res.status(200).json({
        campaign:ans
     })
  })
  .catch(error => {
    res.status(401).json({
        error:error
    })
  })
}

exports.updateCampaign = (req,res,next) => {

    Camp.updateOne({_id:req.params.id},{$set:req.body})
    .then(ans => {
        res.status(200).json({
            message:"Campaign Updated!"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.addCampaign = (req,res,next) => {
    const add = req.body;
    add._id = new mongoose.Tyes.ObjectId;
    const cp = new Camp(add);

    Camp.insertOne(cp)
    .exec()
    .then(ans => {
        res.status(200).json({
            message:"Campaign created"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.launchCampaign = (req,res,next) => {
    const add = req.body;
    add._id = new mongoose.Tyes.ObjectId;
    const cp = new Camp(add);

    Camp.insertOne(cp)
    .exec()
    .then(ans => {
        res.status(200).json({
            message:"Campaign created"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.copyCampaign = (req,res,next) => {
    const add = req.body;
    add._id = new mongoose.Tyes.ObjectId;
    const cp = new Camp(add);

    Camp.insertOne(cp)
    .exec()
    .then(ans => {
        res.status(200).json({
            message:"Campaign created"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}

exports.deleteCampaign = (req,res,next) => {

    Camp.deleteOne({_id:req.params.id})
    .exec()
    .then(ans => {
        res.status(200).json({
            message:"Campaign deleted"
        })
    })
    .catch(error => {
        res.status(401).json({
            error:error
        })
    })
}
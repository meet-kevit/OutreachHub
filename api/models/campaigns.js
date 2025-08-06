const mongoose = require('mongoose');

const campaignSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    status:{type:String,enum:["Draft","Running","Completed"]},
    content:{type:String,required:true},
    workspaceId:{type:mongoose.Schema.Types.ObjectId,ref:'Workspace',required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    tags:{type:String,enum:["Bronze","Silver","Gold","Platinum"],required:true}
})

module.exports = mongoose.model('campagnSchema',campaignSchema);
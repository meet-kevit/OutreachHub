const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    createdBy:{type:mongoose.Types.ObjectId,ref:'User',required:true}
});

module.exports = mongoose.model('Workspace',workspaceSchema);
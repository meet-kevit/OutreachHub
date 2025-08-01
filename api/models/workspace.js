const mongoose = require('mongoose');

const workspaceSchema = mongoose.Schema({
    name:{type:String,required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'Usser',required:true},
});

module.exports = mongoose.model('Workspace',workspaceSchema);
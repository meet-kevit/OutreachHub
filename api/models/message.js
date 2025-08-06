const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    type:{type:String,enum:["text","image"]},
    workspaceId:{type:mongoose.Schema.Types.ObjectId,ref:'Workspace',required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    content:{
        text:{type:String,required:true},
        imagePath:{type:String}
    }
})

module.exports = mongoose.model('messageSchema',messageSchema);
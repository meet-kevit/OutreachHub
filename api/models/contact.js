const mongoose  = require('mongoose');

const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    tag:{type:String,enum:["Bronze","Silver","Gold","Platinum"],required:true},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    workspace:{type:String,ref:'Workspace',required:true},
    createdAt:{type:Date,default:Date.now}
})
module.exports = mongoose.model('Contact',contactSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    createdAt:{type:Date,default:Date.now},
    right:{type:String,default:"edit"},
    workspaces:{type:Array,default:[],ref:'Workspace',required:true},
});

module.exports = mongoose.model('User',userSchema);
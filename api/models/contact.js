const mongoose  = require('mongoose');

const contactSchema = moongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phoneNumber:{trype:String,required:true},
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    name:{type:String,required:true},
})
const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
    token:{type:String,require:true}
})

module.exports = mongoose.model('logout',logSchema);
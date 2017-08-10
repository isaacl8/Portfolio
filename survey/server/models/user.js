const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
   name : {type: String, required: [true, "The name must have data"]}
}, {timestamps: true});

mongoose.model('User', UserSchema);

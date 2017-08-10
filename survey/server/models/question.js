const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    vote1: {type: Number, required: true},
    vote2: {type: Number, required: true},
    vote3: {type: Number, required: true},
    vote4: {type: Number, required: true},
    option1: {type: String, required: true},
    option2: {type: String, required: true},
    option3: {type: String, required: true},
    option4: {type: String, required: true},
    question: {type: String, required: true},
    likes: [{type:Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);

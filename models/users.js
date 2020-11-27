const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
    access_token: {
        type:String,
        required:true
    },
    subscriber_number: {
        type:String,
        required:true
    },
        timestamps:true
});

module.exports = mongoose.model('User', User);
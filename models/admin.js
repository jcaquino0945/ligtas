var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var Admin = new Schema({
    //passport local somes with user and pass
});

Admin.plugin(passportLocalMongoose);

module.exports = mongoose.model('Admin', Admin);
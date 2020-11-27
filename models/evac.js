const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Evac = new Schema({
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },availability: {
        type:Boolean,
        required:true
    }
});
module.exports = mongoose.model('Evac', Evac);
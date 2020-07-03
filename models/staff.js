const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    urlImg: String,
    Information: String    
} , { collection: 'Staff' } );

var staff = mongoose.model('Staff', staffSchema);

module.exports = staff;
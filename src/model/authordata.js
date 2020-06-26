// accessing mongoose package
const mongoose = require('mongoose');

// database connections
mongoose.connect('mongodb://localhost:27017/library');

// accessing schema from mongoose package
const Schema = mongoose.Schema;

// specfiying structure of book saved in db
const AuthorSchema =  new Schema({
    author : String,
    period: String,
    genre : String,
    notableworks: String,
    notableawards:String,
    image : String  
});

//  model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

// exporting to other files
module.exports = Authordata;
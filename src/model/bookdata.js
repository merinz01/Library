// accessing mongoose package
const mongoose = require('mongoose');

// database connections
mongoose.connect('mongodb://localhost:27017/library');

// accessing schema from mongoose package
const Schema = mongoose.Schema;

// specfiying structure of book saved in db
const BookSchema =  new Schema({
    title : String,
    author : String,
    genre : String,
    description: String,
    image : String  
});

//  model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

// exporting to other files
module.exports = Bookdata;
// accessing mongoose package
const mongoose = require('mongoose');

// database connections
mongoose.connect('mongodb://localhost:27017/library');

// accessing schema from mongoose package
const Schema = mongoose.Schema;

// specfiying structure of book saved in db
const SignupSchema =  new Schema({
    name : String,
    mobileno : String,
    email : String,
    password : String,
    confirmpassword : String  
});

//  model creation
var Signupdata = mongoose.model('signupdata',SignupSchema);

// exporting to other files
module.exports = Signupdata;
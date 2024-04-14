const mongoose = require ('mongoose')

const RegisterSchema = new mongoose.Schema({
    Username: String,
    Firstname: String,
    Lastname: String,
    IDnumber: String,
    Phonenumber: String,
    Role: String,
    Password: String,
    Confirmpassword: String,

})

const RegisterModel = mongoose.model('register', RegisterSchema);
module.exports = RegisterModel;
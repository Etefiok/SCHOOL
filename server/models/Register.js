const mongoose = require ('mongoose')

const RegisterSchema = new mongoose.Schema({
    Firstname: String,
    password: String,
    confirmpassword: String,

})

const RegisterModel = mongoose.model('register', RegisterSchema);
module.exports = RegisterModel;
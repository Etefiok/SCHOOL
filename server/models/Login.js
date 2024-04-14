const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    idNumber: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

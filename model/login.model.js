const mongoose = require('mongoose');


let logIn = new mongoose.Schema({
    mobelNumber: {
        type: String,
        trim: true,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('logIn', logIn);
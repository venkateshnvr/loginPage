"use strict";
const express = require('express');
const mongodbConnection = require('./mongo.db')

mongodbConnection() // mongodb connetion

let app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', require('./api/login.api')) // api

let PORT = process.env.PORT || 2001;

app.listen(PORT, (err) => {
    if (err) {
        return console.log('port error')
    }
    return console.log(`connected to port...${PORT}`)
});



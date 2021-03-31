const { Router } = require('express');
const bcrypt = require("bcrypt")
const logIn = require("./../model/login.model");

let route = Router()

route.post("/login", async (req, res) => {
    let { mobelNumber, password } = req.body;
    let hashPassword = await bcrypt.hash(password, 10)
    let LogIn = await new logIn({ mobelNumber, password: hashPassword })
    LogIn.save()
    .then(() => {
        res.status(200).json({data: LogIn})
    })
    .catch((err) => console.log(err))
})

module.exports = route;
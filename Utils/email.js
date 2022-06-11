const nodemailer = require("nodemailer")
const { getMaxListeners } = require("../Model/AdminModel")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
})

module.exports = transporter
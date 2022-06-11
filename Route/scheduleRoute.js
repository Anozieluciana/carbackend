const express = require('express')

const router = express.Router()

const { createSchedule, getSchedule } = require("../Controlla/schemaControlla")

router
    .route("/")
    .post(createSchedule)
    .get(getSchedule)


module.exports = router
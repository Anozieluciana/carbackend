const mongoose = require('mongoose')
// require("dotenv").config()
// const url = process.env.URL
const url ='mongodb://localhost/mycardb'

mongoose.connect(url).then(()=>{
    console.log('connected to database')
}).catch((error)=>{
    console.log(error.message)
})

module.exports=mongoose
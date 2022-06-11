const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    name:{
        type:String
    },
   location:{
        type:String
    },
    purpose:{
        type:String
    },
    contact:{
        type:String
    },
    email:{
        type:String
    },

    add:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
    }
})

module.exports= mongoose.model("schedule", scheduleSchema)
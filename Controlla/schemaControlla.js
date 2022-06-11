const scheduleMod = require('../Model/scheduleModel')
const transporter = require("../Utils/email")

const createSchedule =async(req, res)=>{
    try{

        const {name, password, purpose, contact,email} =req.body

        const schedule = await scheduleMod.create({
            name, password, purpose, contact,email
        })
            const mailOptions ={
                from:process.env.EMAIL,
                to:email,
                subject:"Account Verification",
                html:`
                <h3>
                    Thanks for booking a schedule ${schedule.name}</h3>
                   
                `
            };

            transporter.sendMail(mailOptions, (err, info)=>{
                if(err){
                    console.log(err.message)
                }else{
                    console.log('we will get back to you as soon as possible',info.messageId)
                }
            })

        res.status(200).json({
            status:"success",
            data:schedule
        })
        console.log(schedule)
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}


const getSchedule = async(req,res)=>{
    try{
        const schedule = await scheduleMod.find()
        res.status(200).json({
            status:"successfull",
            data:schedule
        })
    }
    catch(error){
        res.status(404).json({
            message:error.message
        })
    }
}

module.exports={
    createSchedule,
    getSchedule
}
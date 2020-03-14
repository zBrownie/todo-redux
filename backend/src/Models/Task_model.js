const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema(
    {
        task:String,
        completed:Number,
        userCreated:String,
        userDoing:String
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Tasks", TaskSchema);
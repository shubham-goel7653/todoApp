const mongoose = require('mongoose')
const {Schema} = mongoose

const TodoSchema = new Schema({
    _id : String,
    userId : String,
    taskMessage : String,
    todoDate : Date,
    isNotificationEnable : Boolean,
    time : Date,
    priority : Array,
    isDone : Boolean,
    isSkiped : Boolean,
    isReschedule : Boolean,
    rescheduleAt : Date,
    rescheduleTo : Date
},
{
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('Todo', TodoSchema, 'Todo');

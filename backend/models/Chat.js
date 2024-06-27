const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatSchema = new Schema({
    messages: {
        type: String,
        require: true
    },
    datas: {
        type: String,
        require: true
    },
    user:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    chatsection:{
        type:String
      },
});

const Chat = mongoose.model('chat', ChatSchema);
module.exports = Chat
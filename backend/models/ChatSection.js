const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChatSectionSectionSchema = new Schema({
  name:{
    type:String
  }
});

const ChatSectionSection = mongoose.model('ChatSectionSection', ChatSectionSectionSchema);
module.exports = ChatSectionSection
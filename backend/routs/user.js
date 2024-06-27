const express = require("express")
const router = express.Router();
const ChatSection = require('../models/ChatSection');
const Chat = require('../models/Chat');

router.post('/createchat', async (req, res) => {
  let { email, messages, datas, chatsectionid } = req.body;

  let chatsection;

  if (!chatsectionid) {
    const chatSection = await new ChatSection({
      name: email,
  }).save();

  chatsection = chatSection._id;
  }else{
    chatsection = chatsectionid
  }

  try {
    // check user alredy exist or not
    if (email) {
      let chat = await new Chat({
        messages,
        datas,
        user: email,
        chatsection
      }).save();
      res.status(201).send({
        success: true,
        totalCount: chat.length,
        message: "new chat is created",
        chat
      })
    }

  } catch (error) {
    console.error(error.message);
    res.status(500).send('internal server error')
  }

})

router.get('/chatwithid/:chatsectionid', async (req, res) => {

  try {
      const chat = await Chat.find({chatsection:req.params.chatsectionid}).populate("chatsection")
      res.status(201).send({
        success: true,
        totalCount: chat.length,
        message: "chat is fetched",
        chat
      })

  } catch (error) {
    console.error(error.message);
    res.status(500).send('internal server error')
  }

})

module.exports = router
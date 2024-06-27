const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors");
const connectToMongo = require('./db')

dotenv.config();

connectToMongo();

const app = express()
const port = 5000
app.use(cors());

app.use(express.json())

app.use('/api/chatbot', require('./script'))
app.use('/api/user', require('./routs/user'))
app.use('/api/chatsection', require('./routs/chatsection'))

app.listen(port, () => {
  console.log(`CodeGeni app backend listening on port at http://localhost:${port}`)
})

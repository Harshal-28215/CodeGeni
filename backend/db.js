const mongoose = require('mongoose')

const connectToMongo = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to mongo seccessfully')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;
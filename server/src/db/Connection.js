const mongoose = require('mongoose')
require('dotenv').config()
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    }

    const url = process.env.MONGODB_URL;
    try {
        mongoose.connect("mongodb+srv://abhikhanna2710:letsbuild10@cluster0.qz8yiab.mongodb.net/?retryWrites=true&w=majority", connectionParams)
        console.log("Connected Database");
    } catch (error) {
        console.log(error.message)
        console.log("Not connected");
    }
}
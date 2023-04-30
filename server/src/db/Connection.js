require('dotenv').config();
const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
    }

    try {
        mongoose.connect(process.env.MONGODB_URL, connectionParams)
        console.log("Databse Connected")
    } catch (error) {
        console.log(error.message);
        console.log("Not connected")
    }
}
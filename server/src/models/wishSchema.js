const mongoose = require("mongoose");


const wishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    wish:{
        type:String,
        required:true
    }
})


const Wish = mongoose.mp
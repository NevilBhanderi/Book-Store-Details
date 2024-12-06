const mongoose = require("mongoose");

const schema = mongoose.Schema({
    book :{
        type:String,
        required:true,
    },
    author :{
        type:String,
        required:true,
    },
    price :{
        type:String,
        required:true,
    },
    publishdate :{
        type:String,
        required:true,
    },
});

const admin = mongoose.model("Book",schema);

module.exports = admin;
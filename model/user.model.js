const mongoose=require("mongoose");
const bcrypt = require('bcrypt');

const Schema= mongoose.Schema

const userSchema = new Schema({
    email:{
        type:"string",
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:"string",
        required:true

    }
})

const usermodel=mongoose.model("user",userSchema);
module.exports=usermodel
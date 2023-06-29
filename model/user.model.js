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
userSchema.pre('save', async function (){
    try {
        const user = this;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    catch (err) {
        console.log(err)}
    })
const usermodel=mongoose.model("user",userSchema);
module.exports=usermodel
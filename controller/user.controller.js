const userService=require("../service/user.service");
const bcrypt=require('bcrypt')
const register=async (req,res)=>{
    try {
        const{email,password}=req.body;
        const user= await userService.registeruser(email,password);
        res.json(user);
    }catch(err){
        console.log(err);
    }
}
const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
    const user=await userService.checkUser(email)
        if(!user){
        throw new Error('user not found')}


        const match=await bcrypt.compare(password,user.password)
        if(!match){
        throw new Error('invaild password')}
    
    let tokendata={
        id:user._id,
        user:user.email
    }
    const token=await userService.tokendata(tokendata,'secertkey');
    res.status(201).json({
        status:true,
        token:token
    })}
    catch(err){
        console.log(err);
    }
}
module.exports={register,login}
const userModel=require("../model/user.model");

class userService{
    static async registeruser(email,password){
        try{
            const createrUser=await userModel.create({email,password});
            return createrUser;
        }
        catch(err){
            console.log(err);
        }
    
    }

}

module.exports=userService;

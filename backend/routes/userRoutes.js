const express=require("express");
const signup = require("../controllers/userController");
const userRouter=express.Router();
userRouter.post("/signup",signup);

userRouter.get("/login",(req,res)=>{
    
});



module.exports=userRouter;

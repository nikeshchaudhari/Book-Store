const express = require("express")
const jwt = require("jsonwebtoken")

const authToken = (req,res,next)=>{
const authHeader = req.headers["authorization"];
const token =  authHeader && authHeader.split(" ")[1];
if(token == null ){
    return res.status(401).json({
        msg:"Authorization token required"
    })
}
jwt.verify(token,"bookStore123",(err,user)=>{
    if(err){
        return res.status(403).json({
            msg:"token expired please signin & login again"
        })
    }
    req.user = user;
    next();
})
}
module.exports={authToken}
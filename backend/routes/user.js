const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const {authToken} = require("./userAuth");
const user = require("../models/user");
// SignUp
router.post("/sign-up", async (req, res) => {
  try {
    
    const{userName,email,password,address}=req.body;
    
    // username greater than 4
    if(userName.length<4){
        return res.status(400).json({
            message:"username is greater than 3"
        })
    }
    // username already exist
const existUsername = await User.findOne({userName:userName})
if(existUsername){
    return res.status(400).json({
        message:"Username already exist"
    })
}
// email realready exist
const existEmail = await User.findOne({email:email})
if(existEmail){
    return res.status(400).json({
        message :"Email already exist"
    })
}
// password check
if(password.length<=5){
    return res.status(400).json({
        message:"password is greater than 4"
    })
}
// 
const Hash = await bcrypt.hash(password,10)
const newUser = await new User({
    userName:userName,
    email:email,
    password:Hash,
    address:address,
})
const data = await newUser.save()
res.status(200).json({
    data:"Signup Successfully"
})
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err,
    });
  }
});

// sign-in
router.post("/sign-in",async(req,res)=>{
    try {
    const{userName,password}=req.body
    const existingUser = await User.findOne({userName});
    if(!existingUser){
        return res.status(400).json({
            message:"Invalid user"
        })
    }
    await bcrypt.compare(password,existingUser.password,(err,data)=>{
        if(data){
            const authClaims =[
                {
                    name:existingUser.userName,
                    role:existingUser.role
                }
            ]
            const token = jwt.sign({
                authClaims
            },"bookStore123",{
                expiresIn:"30d"
            })
            res.status(200).json({
               id:existingUser._id,
               role:existingUser.role,
               token:token
            })
        }else{
            res.status(200).json({
                message:"Invalid..."
            })
        }
    })
      } catch (err) {   
        console.log(err);
    
        res.status(500).json({
          error: err,
        });
      }
    
    });

// User get information

router.get("/get-user",authToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const data = await User.findById(id).select("-password");
        res.status(200).json({
            data:data   
        })

    }
    catch(err){
console.log(err);
res.status(400).json({
    error:err
})

    }
})

// update address
router.put("/update",authToken,async(req,res)=>{
    try{
        const {id}=req.headers;
        const {address}=req.body;
        await user.findByIdAndUpdate(id,{address:address});
        res.status(200).json({
            msg:"Address updated succesfullly..."
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error:err
        })
        
    }
})
module.exports = router;

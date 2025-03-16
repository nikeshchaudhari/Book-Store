const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName :{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    address:{type:String,require:true},
    avatar:{type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fprofile_3135715&psig=AOvVaw0sGd_5oBdlbrHWFKcGV4mW&ust=1742201516589000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCQhMqcjowDFQAAAAAdAAAAABAE"},
    role:{type:String, default:"user",enum:["user","admin"]},
    favourite :[
        {
            type:mongoose.Types.ObjectId,ref:"books"
        }
    ],
    cart :[
        {
            type:mongoose.Types.ObjectId,ref:"books"
        }
    ],
    orders :[
        {
            type:mongoose.Types.ObjectId,ref:"order"
        }
    ]

},{timestamps:true})

module.exports = mongoose.model("user",userSchema)
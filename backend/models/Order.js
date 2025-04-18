const mongoose= require("mongoose")
const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
    status:{
        type:String,
        default:"Order Place",
        emum:["Order Place","Out of delivery","Cancel","Delivered"]
    },
},{timestamps:true})

module.exports = mongoose.model("order",orderSchema)
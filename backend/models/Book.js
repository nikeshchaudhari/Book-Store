const mongoose= require("mongoose")
const bookSchema = new mongoose.Schema({
     url:{type:String, require:true},
     tittle:{type:String, require:true},
     author:{type:String, require:true},
     price:{type:Number, require:true},
     desc:{type:Number, require:true},
     language:{type:Number, require:true},

},{timestamps:true})
module.exports = mongoose.model("books",bookSchema)
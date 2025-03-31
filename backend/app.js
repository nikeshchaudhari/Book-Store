const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoDb = require("mongoose");
const userRoutes = require('./routes/user')
const addRouters = require("./routes/book")
const Fav = require('./routes/favourite');
require('dotenv').config();
const dbConnect = async()=>{
try{
await mongoDb.connect(`${process.env.URI}`)
console.log("Database Connected..");

}
catch(err){
console.log("something wrong..");
console.log(err);


}
}
dbConnect();

app.use(bodyParser.json())
app.use(express.json())
app.use("/user",userRoutes)
app.use("/addbook",addRouters)
app.use("/fav",Fav);
module.exports = app;
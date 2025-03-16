const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoDb = require("mongoose");
const userRoutes = require('./routes/user')

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

module.exports = app;
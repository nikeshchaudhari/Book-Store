const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { authToken } = require("./userAuth");
const Books = require("../models/Book");
const User = require("../models/user");

// add book admin
router.post("/add-book", authToken, async (req, res) => {
  try {
    const{id}=req.headers;
    const user = await User.findById(id)
    if(user.role !== "admin"){
        return res.status(400).json({
            msg:"You are not access only admin access"
        })
    }
    const newBook = new Books({
      url: req.body.url,
      tittle: req.body.tittle,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });
    await newBook.save();
    res.status(200).json({
      msg: "Book added Succesfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  }
});

module.exports = router;

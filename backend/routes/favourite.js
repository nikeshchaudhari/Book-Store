const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { authToken } = require("../routes/userAuth");

// add book to favourite

router.put("/add-book-to-favourite", authToken, async (req, res) => {
  try {
    const { book, id } = req.headers;
    const userData = await User.findById(id);
    const isBookFav = userData.favourite.includes(bookid);
    if(isBookFav){
        return res.status(200).json({
            "msg":"Book is already favourite"
        })
    }
    await User.findByIdAndUpdate(id,{$push:{favourite:bookid}});
    return res.status(200).json({
        message : "Book add to favourite"
    })
  } catch (err) {
    res.status(500).json({});
  }
});

module.exports = router;

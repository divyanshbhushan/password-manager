const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const passport = require("passport");
const userModel = require("../database/models/usermodel");
const itemModel = require("../database/models/itemmodel");
const folderModel = require("../database/models/foldermodel");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isUnauthenticated = require("../middlewares/isUnauthenticated");

// GET routes
router.get("/" , async (req, res, next) => {
  const user = await userModel.findOne({username: "divyanshbhushan633"}).populate("itemList").populate("folders").exec();
  console.log(user);
  res.render('index')
});

module.exports = router;
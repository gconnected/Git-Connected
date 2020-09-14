const express = require("express");
const fileController = require("../controllers/fileController");
const router = express.Router();
const path = require("path");

// router.get('/login', (req, res) => {
// res.sendFile(path.resolve(__dirname, './login'))
//   });

//   router.get('/home', (req, res) => {
// res.sendFile(path.resolve(__dirname, './home'))
//   });

//   router.get('/profile', (req, res) => {
// res.sendFile(path.resolve(__dirname, './profile'))
//   });

//   router.get('/search', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './search'))
//   });

router.get("/geteverything", fileController.getEverything, (req, res) => {
  res.status(200).json(res.locals.everything);
});

router.post("/search", fileController.searchUser, (req, res) => {
  res.status(200).json(res.locals.userSearched);
});

module.exports = router;

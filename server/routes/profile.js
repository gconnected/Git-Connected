const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/profile', (req, res) => {
  res.sendFile(path.resolve(__dirname, './profile'))
})











module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './login'))
})











module.exports = router;
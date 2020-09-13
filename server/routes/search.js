const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/search', (req, res) => {
  res.sendFile(path.resolve(__dirname, './search'))
})











module.exports = router;
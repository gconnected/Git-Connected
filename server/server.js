const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

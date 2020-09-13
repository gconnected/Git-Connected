const express = require("express");
const app = express();
const PORT = 5000;

const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/api');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api)

// This will be used to serve our static file to the client 
app.use('/', express.static('../index.html'));


app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: ' An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {

    console.log(`Server listening on port: ${PORT}`);
});

<<<<<<< HEAD
module.exports = app;
=======




module.exports = app;
>>>>>>> a6d415f861f97093e0a25bcf6f0ab902088a6211

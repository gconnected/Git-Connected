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

// Send that bad boy to api. Thanks for all that you do, api.
app.use('/api', api)

// Sometimes you're gonna have static files. 
// During these times this router will serve them up.
// She's small but mighty.
app.use('/', express.static('../index.html'));

// Is the user lost? Silly user.
// Catch all error handler will tell them they lost af
app.use((req, res) => res.sendStatus(404));

// If you get an error, this is your guy.
// The one. The only. The Global Error Handler.
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

module.exports = app;


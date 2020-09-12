const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const profileRouter = require('./routes/profile')
const searchRouter = require('./routes/search')


app.use(cors());



app.use('/', express.static('../index.html'));
// This will be used to serve our static file to the client 





app.use('/search', searchRouter );


app.get('/profile', (req, res) => {
    res.sendFile(path.resolve(__dirname, './profile'))
})


app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './login'))
})


app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './home'))
})



app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});





module.exports = app;
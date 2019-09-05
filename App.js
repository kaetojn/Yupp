const express = require('express')
const bodyParser = require('body-parser')
const session = require('client-sessions');
const mongoose = require('mongoose');
const transactions = require('./routes/api/transactions')
const app = express();
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./conf/key').mongoURI;

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Success: Yes"))
    .catch(error => console.log('Error:', error));

// Sessions
app.use(session({
	cookieName: 'session',
    secret: 'Yupp',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
}));

// View render engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));


app.use('/api/transactions', transactions);
const port = process.env.PORT || 5000
app.listen(port, () => console.error(`Server started on port ${port}`));


module.exports = app;
    

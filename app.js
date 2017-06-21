const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

var twatts = require('./routes/twatts');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/twitter', twatts);

app.listen(process.env.PORT, ()=>{
  console.log('success to running app on port: ', process.env.PORT);
})

module.exports = app;

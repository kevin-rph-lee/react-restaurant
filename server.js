"use strict";

require('dotenv').config();


const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const morgan = require('morgan');
const knexLogger = require('knex-logger');

var app = express();
app.use(express.static(path.join(__dirname,"/html")));

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('dev'));
app.use(knexLogger(knex));

app.post('/signin', function (req, res) {
  var user_name=req.body.email;
  var password=req.body.password;
  if(user_name=='admin' && password=='admin'){
  	res.send('success');
  }
  else{
  	res.send('Failure');
  }
})

app.listen(PORT,function(){
    console.log("Started listening on port", PORT);
})

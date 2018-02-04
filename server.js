"use strict";

require('dotenv').config();


const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const knexLogger = require('knex-logger');
const session = require('express-session');
const app = express();

app.use(express.static(path.join(__dirname,"/html")));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(session({secret: 'my-secret',
                 resave: true,
                  saveUninitialized: true}
                ));
app.use(knexLogger(knex));
const menuItemsRoutes = require('./routes/menu_items');



let sessions;

app.get('/home', function (req, res) {
  if(sessions && sessions.email){
    res.sendFile(__dirname + '/html/home.html');
  }
  else{
    res.send('unauthorized');
  }
})


app.post('/signin', function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  sessions = req.session;
  console.log('test');
  knex
    .select("password")
    .from("users")
    .where({email: email})
    .then((results) => {
      console.log(results);
      if(password===results[0].password){
        sessions.email = email;
        res.send('success');
      }
      else{
        res.status(404).send('Invalid!');
      }
    });
})

app.use("/menu_items", menuItemsRoutes(knex));


app.listen(PORT,function(){
    console.log("Started listening on port", PORT);
})

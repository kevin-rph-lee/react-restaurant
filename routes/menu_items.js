"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("menu_items")
      .then((results) => {
        //WILL ALWAYS RETURN AN ARRAY
        res.json(results);
      });
  });
  return router;
};

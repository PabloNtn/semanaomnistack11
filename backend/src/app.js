const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

  app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
    res.header("Access-Control-Allow-Methods", "DELETE");
    next();
  })
//app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
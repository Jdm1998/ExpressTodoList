const express = require('express');
const route = express.Router();
const {home} = require('../controller/home');

route.use('/',home);

module.exports =route;

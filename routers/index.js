const express = require('express');
const { add } = require('../controller/addtask');
const route = express.Router();
const {home} = require('../controller/home');
const { del} = require('../controller/delete');

route.get('/',home); // for homepage
route.post('/add',add); // post request for adding task 
route.post('/delete',del); // post request for deleting task


module.exports =route;

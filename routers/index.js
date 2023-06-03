const express = require('express');
const { add } = require('../controller/addtask');
const route = express.Router();
const {home} = require('../controller/home');
const { del} = require('../controller/delete');

route.get('/',home);
route.post('/add',add);
route.post('/delete',del);


module.exports =route;

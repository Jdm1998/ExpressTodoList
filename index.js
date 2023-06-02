const express = require('express');
const app = express();
const port = 8000;
const route = require('./routers/index');
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',route);
app.listen(port,(err)=>{
 if(err)
 console.log(err);
 else
 console.log("server is running"); 
})
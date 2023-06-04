const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const port = 8000;
const route = require('./routers/index');

const db= require('./configs/mongo'); // database connection
app.set('view engine','ejs');  //setting template engine
app.set('views','./views');   // setting view folder
app.use(express.static('./assets')) // for getting static
app.use(urlencoded());   // for form-data
app.use('/',route);    


app.listen(port,(err)=>{
 if(err)
 console.log(err);
 else
 console.log("server is running"); 
})
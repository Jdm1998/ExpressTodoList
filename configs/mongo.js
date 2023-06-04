const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo_list");

const db = mongoose.connection;


db.on('error',console.error.bind(console,'error connecting to database'));
db.once('open',()=>{
    console.log('success fully connected to the database');
})
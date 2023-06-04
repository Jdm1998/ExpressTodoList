const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    duedate:{
        type:String,
        required:true
    }   
})

const TodoLists = mongoose.model('TodoLists', todoSchema);
module.exports  = TodoLists;
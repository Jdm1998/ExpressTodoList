const { addtask } = require("./home");


module.exports.add = function(req,res){
    console.log("in addtask.js",req.body.description);

    let task={
        id:1,
        title:req.body.description,
        duedate:req.body.date,
        category:req.body.category
    
    };

    addtask(task);
      return res.redirect('back');
}
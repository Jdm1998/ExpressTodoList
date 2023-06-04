const modeldb= require('../model/database')

module.exports.add =  async function(req,res){
    console.log("in addtask.js",req.body.description);

    let task={   
        
        title:req.body.description,
        duedate:req.body.date,
        category:req.body.category
    
    };  //formatting task for creating

        let taskcreated = await modeldb.create(task);
       console.log(taskcreated);
     return res.redirect('back');
}
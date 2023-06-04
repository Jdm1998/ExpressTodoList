 const modeldb = require('../model/database');

module.exports.del = async function(req,res){
        const titles = req.body.delete;
    console.log("in delete.js",req.body.delete);
    console.log(typeof req.body.delete);
        try{
            if(typeof titles =="string"){
               await modeldb.deleteOne({title:titles});  //deleting object with same title
            }
            else{
                for(let title in titles){              // deleting multiple object  
                    await modeldb.deleteOne({title:title});
                    }
            }
            
        }
        catch(error){
            console.log("error in delete",error);
        }
        res.redirect('back');
}

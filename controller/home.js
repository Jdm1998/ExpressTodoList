
const modeldb =require('../model/database');


// const tasks=[{
//     id:1,
//     title:"task1",
//     duedate:"25/02/2023",
//     category:"work"

// }]



module.exports.home = async (req,res)=>{
    try{
        console.log('in home.js')
        const tasks = await modeldb.find({}); //getting all task
        return res.render('home',{tasks:tasks});

    }
    catch(error){
        console.log("getAllTasks Error:", error);
        return res.status(500).send("Something went wrong!");
      
    }
}


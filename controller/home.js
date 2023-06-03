
const tasks=[{
    id:1,
    title:"task1",
    duedate:"25/02/2023",
    category:"work"

}]

module.exports.tasks=tasks;
module.exports.addtask= function addtasks(task){
    tasks.push(task);
}
module.exports.del =function del(titles){
    if(typeof titles =="string"){
        let index= tasks.findIndex(task => task.title ==titles)
        if(index!=-1)
        tasks.splice(index,1); 
    }
    else{
   for(let title in titles){
       let index= tasks.findIndex(task => task.title ==title)
       if(index!=-1)
       tasks.splice(index,1);
    }
}

}
module.exports.home = function(req,res){
    console.log('in home.js')
    return res.render('home',{tasks:tasks});
}
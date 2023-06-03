
const {del} = require('./home')
module.exports.del = function(req,res){

    console.log("in delete.js",req.body.delete);
    console.log(typeof req.body.delete);
        del(req.body.delete);
    res.redirect('back');
}
function validation(req,res,next){
    console.log("token Approved..............");
    next()
}
module.exports=validation;
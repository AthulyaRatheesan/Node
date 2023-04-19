function Token(req,res,next)
{
    console.log("token creting.....");
    setTimeout(()=>{
        const TOKEN="1234"
        req.token=false
        next()
    },8000)
}
module.exports=Token
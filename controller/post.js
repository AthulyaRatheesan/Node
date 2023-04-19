const post1=(req,res)=>{
    const {name,password}=req.body;
    console.log(name,password);
    res.json({name,password})
}
module.exports=post1;
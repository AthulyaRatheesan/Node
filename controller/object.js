const obj={id:100,name:"Adarsh",age:26}

function object(req,res){
    console.log(obj)
    res.send(obj)

}


module.exports=object;
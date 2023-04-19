const abc=[{id:100,name:"athu",age:23,qualification:"BCA"},
           {id:101,name:"appu",age:23,qualification:"MSC"},
           {id:102,name:"anu",age:23,qualification:"MA"}]


function array(req,res)
   {
    
    console.log(abc);
    res.send(abc)
   }
// module.exports=array;



// const postreq=(req,res)=>{
//     const {name,qualification}=req.body;
//     console.log(name,qualification)
//     res.json({name,qualification})

// }
// module.exports=postreq;
//================================================================================================


// const filter=(req,res)=>{                        // filter :datas filter cheyth edukan
//     const data=parseInt(req.params.id)              // parseint  : string to integer
//     const id=abc.filter(val=>(val.id===data))
//     console.log(id)
//     res.json(id)
// }
// module.exports=filter;

//===================================================================================================


//const filter1=(req,res)=>{
    //const datas=parseInt(req.params.age)
    // const age=abc.filter(val=>(val.age===datas))    //filter :same age ulla ellavarum kittum
    //const age=abc.find(val=>(val.age===datas))         //find :same age ullavaril  first age kittum
    //console.log(age)
   // res.json(age)
//}
//module.exports=filter1

//===================================================================================================
// const filter2=(req,res)=>{
//     const datas=(req.params.name)
//     const name=abc.filter(val=>(val.name===datas))
//     console.log(name);
//     res.json(name)
// }
// module.exports=filter2

//==============================================================================================
// const combination=(req,res)=>{
//     const datas1=parseInt(req.params.id)
//     const datas2=(req.params.name)
//     const datas3=parseInt(req.params.age)
//     const name=abc.filter(val=>(val.id===datas1 && val.name===datas2 && val.age==datas3))
//     console.log(name);
//     res.json(name)
// }

// module.exports=combination





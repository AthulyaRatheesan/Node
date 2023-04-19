const arr=[
{id:100,name:"athu",qualification:"Msc",age:24,place:"vatakara",email:"athu12@gmail.com"},
{id:101,name:"ammu",qualification:"bsc",age:26,place:"kt bazar",email:"ammu12@gmail.com"},
{id:102,name:"appu",qualification:"MCA",age:26,place:"kanookara",email:"appu12@gmail.com"}
]

function abc(req,res)
{
   console.log(arr);
   res.send(arr);
}
// module.exports=abc

//===================================================================================
// const ab=(req,res)=>{
//    const data=parseInt(req.params.id)
//    const id=arr.filter(val=>(val.id===data))
//    console.log(id);
//    res.json(id)
// }
// module.exports=ab;

//===================================================================================
// const abcd=(req,res)=>{
//       const data=parseInt(req.params.age)
//       // const age=arr.filter(val=>(val.age===data))
//       const age=arr.find(val=>(val.age===data))
//       console.log(age);
//       res.json(age);
//    }
//    module.exports=abcd;

//===================================================================================
// const abcde=(req,res)=>{
//    const data=(req.params.name)
//    // const age=arr.filter(val=>(val.age===data))
//    const name=arr.find(val=>(val.name===data))
//    console.log(name);
//    res.json(name);
// }
// module.exports=abcde;

//=======================================================================================

const abcdef=(req,res)=>{
   const data=(req.params.email)
   const email=arr.filter(val=>(val.email===data))
   console.log(email);
   res.json(email);
}
module.exports=abcdef;
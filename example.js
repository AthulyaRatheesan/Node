// const fs=require("fs")
// fs.writeFile("text.html","Heyyyy",(err)=>
// {
//     if(err) throw err;
// }
// )
// =======================================================================
// const fs=require("fs")
// fs.appendFile("text.html","welcome",(err)=>
// {
//   if(err) throw err;
// })
//========================================================================
// const fs=require("fs")
// fs.readFile("text.html","utf-8",(err,data)=>
// {
// console.log(data);
// })
//========================================================================
// const fs=require("fs")
// const path=require("path")
// fs.mkdir(path.join(__dirname,"/folder/folder2"),{},(err)=>
// {
//   if(err) throw err;
// });
//==================================================================
// const fs=require("fs")
// const path=require("path")
// fs.rmdir(path.join(__dirname,"/folder"),{recursive:true},(err)=>
// {
//   if(err) throw err;
// });
//====================================================================================================






// const http=require("http")
// const app=http.createServer((req,res)=>
// {
//     res.write("hello")
//     console.log(req.url);    //    req.url :path npkan vendi
//     res.end()
// }
// )
// const port=process.env.port||3000;   //env secret code
// app.listen(port,()=>console.log(`server is running on ${port}`))
//================================================================================
// const http=require("http")
// const fs=require("fs")
// const path=require("path")
// const app=http.createServer((req,res)=>
// {
// if(req.url==='/exp'){
//     fs.readFile(path.join(__dirname,'folder1',"exp.html"),"utf-8",(err,data)=>{
//         if(err) throw err
//         res.end(data)
//     })
// }

//   if(req.url==='/exp1'){
//     fs.readFile(path.join(__dirname,'folder1',"exp1.html"),"utf-8",(err,data)=>{
//         if(err) throw err
//         res.end(data)
//     })
//   }
// }
// )
//   const  port=process.env.port ||3000;
//   app.listen(port,()=>console.log(`server is running on ${port}`))

//===========================================================================
//  const express=require("express")
//  app=express()
//   app.get("/",(req,res)=>{
//     res.send("<h1>welcome</h1>")
//   })
//   app.get("/exp",(req,res)=>{
//     res.send("<h1>hellllloooo</h1>")
//   })
//   app.get("/*",(req,res)=>{                           //app.get :respose kittan
//     res.status(404)
//     res.send("404")
    
//   })
//   const port=process.env.port||3000;
//   app.listen(port,()=>console.log(`server is running on ${port}`))

//==================================================================================

// const express=require("express")
// const path=require("path")
// const app=express()
// app.use(express.static("folder1"))
// app.get("/*",(req,res)=>{
//     res.status(404)
//     res.send("404")
// }
// )
// const port=process.env.port||3000;
//   app.listen(port,()=>console.log(`server is running on ${port}`))
//=============================================================================================

//   const express=require("express")
//   const path=require("path")
// const app=express()
// app.get("/profile",Token,validation,Delete,(req,res)=>{
//     console.log("user logged");
//   res.send("<h1>token is created</h1>")
// })
// function Token(req,res,next){
//     console.log("token creatinggg..............");
//     next()
// }
// function validation(req,res,next){
//     console.log("token Approved..............");
//     next()
// }
// function Delete(req,res,next){
//     console.log("token deleted.............");
//     next()
// }

// const port=process.env.port||3000;
//   app.listen(port,()=>console.log(`server is running on ${port}`))
//======================================================================================

// const express=require("express")
// const app=express()
// const Token=require("./middle/Token")
// const Delete=require("./middle/Delete")
// const validation = require("./middle/Validation")

// const mid=[Token,validation,Delete]

// app.get("/profile",mid,(req,res)=>{
//     console.log("user logged");
//     res.send("<h1>createdddd</h1>")
// })

// const port=process.env.port||3000;
//   app.listen(port,()=>console.log(`server is running on ${port}`))
//==========================================================================================


// console.log("this is my node class")
// a=18;
// b=2;
// c=a+b;
// console.log(c)
// const b=["a","b","c"];
// const c=["d"];
//  b.push("c")

// console.log(b)

// ab()
// console.log(__filename);
// console.log(__dirname);
// const path=require("path")
// console.log(path); //path used to control
// const path=require("path")
// console.log(path.basename(__filename));
// const path=require("path")
// console.log(path.extname(__filename));
// const path=require("path")
// console.log(path.dirname(__filename));
// const path=require("path")
// console.log(path.parse(__filename));
// const path=require("path")
// console.log(path.join(__dirname,"folder","server.js")); //path to path join
// const fs=require("fs") //file system   file add,delete
// console.log(fs);
// const fs=require("fs")
// fs.writeFile("text.html","hellooo",(err)=>
// {
//     if(err) throw err;
// }
// )
// const fs=require("fs")
// fs.writeFile("text.html","hiii",(err)=>
// {
//     if(err) throw err;
// }
// )
// const fs=require("fs")
// fs.appendFile("text.html","hellooo",(err)=>
// {
//     if(err) throw err;
// }
// )
// const fs=require("fs")
// fs.appendFile("text.html","welcome",(err)=>
// {
//     if(err) throw err;
// }
// )
// const fs=require("fs")
// fs.readFile("text.html","utf-8",(err,data)=> //  utf-8::human readable language convert (character encoding)
// {
//     console.log(data);
// }
// )
// const path=require("path")
// const fs=require("fs")
// fs.mkdir(path.join(__dirname,"/folder/folder2"),{},(err)=> //mkdir :folder make
// {
//     if(err) throw err;
// }
// );
// const path=require("path")
// const fs=require("fs")
// fs.rmdir(path.join(__dirname,"/folder"),{recursive:true},(err)=> //rmdir :folder remove  ,recursive:true- orderil delete cheyyan
// {
//     if(err) throw err;
// }
// );

//------------------------------------------------------------------------------//
//------------------------ API  creation-----------------------------//

// const http=require("http")
// http.createServer((request,response)=>{
//     response.write("this is node")
//     response.end()
// }).listen(5000,console.log("server is running"));

// const http=require("http")
//   const server=http.createServer((req,res)=>{
//     res.write("<h1>this is node</h1>")
//     console.log(req.url);
//     res.end()

// })
//  PORT=process.env.PORT||5000;
//  server.listen(PORT,()=>console.log(`server is running on ${PORT}`));
//================================================================================
// const http=require("http")
// const fs=require("fs")
// const path=require("path")
// const abc=http.createServer((req,res)=>{

// if(req.url==="/about"){
// fs.readFile(path.join(__dirname,"folder","about.html"),"utf-8",(err,data)=>{
        
//         if(err) throw err;
//         res.end(data)
//     })
// }
// if(req.url==="/home"){
//     fs.readFile(path.join(__dirname,"folder","home.html"),"utf-8",(err,data)=>{
            
//             if(err) throw err;
//             res.end(data)
//         })
//     }
//     if(req.url==="/contact"){
//         fs.readFile(path.join(__dirname,"folder","contact.html"),"utf-8",(err,data)=>{
                
//                 if(err) throw err;
//                 res.end(data)
//             })
//         }

// })
// PORT=process.env.PORT||5000;
// abc.listen(PORT,()=>console.log(`server is running on ${PORT}`));



//----------------------------------------------------------------------------//
// ---------------------------------  EXPRESS--------------------//
// const express=require("express")
// const app=express()
// app.use(express.static("folder"))

// app.get("/",(req,res)=>{
//     res.send("<h1>welcome</h1>")
// })
// app.get("/home",(req,res)=>{
//     res.send("<h1>heloooo</h1>")
// })
// PORT=process.env.PORT||5000
// app.listen(PORT,()=>console.log(`server is running on ${PORT}`));


// const express=require("express")
// const app=express()
// app.use(express.static("folder"))

// PORT=process.env.PORT||5000
// app.listen(PORT,()=>console.log(`server is running on ${PORT}`));

// const express=require("express")
// const app=express()
// app.use(express.static("folder"))     //   app.use: global ayit evideyum use cheyyan vendi (application level middileware aanu)
// app.get("/*",(req,res)=>{
//     res.status(404)
//     res.send("404")  //error kanikan
// })
// PORT=process.env.PORT||5000
// app.listen(PORT,()=>console.log(`server is running on${PORT}`));
//=======================================================================================

// const express=require("express")
// const app=express()
// app.get("/about",Token,validation,(req,res)=>{
//     res.send("<h1>user created</h1>")
//     console.log("user created")

// })
// function Token(req,res,next){
//     console.log(req.url);
//     console.log("token creating.....");
//     next()
// }
// function validation(req,res,next){
    
//     console.log("token approved.....");
//     next()
// }
// PORT=process.env.PORT||5000
// app.listen(PORT,()=>console.log(`server is running on ${PORT}`))
  
//================================================================================


// const Token=require("./middlewares/token")
// const validation=require("./middlewares/validation")
// const express=require("express")
// const app=express()
// app.get("/about",Token,validation,(req,res)=>{
//     res.send("<h1>user createdd</h1>")
//     console.log("user logged");
// })
// function Token(req,res,next)
// {
//     console.log("token creting.....");
//     setTimeout(()=>{
//         const TOKEN="1234"
//         req.token=false
//         next()
//     },8000)
// }
// function validation(req,res,next){
//     if(req.token){
//     console.log("token approved..")
//     next()
//     }else{
//         console.log("no token")
//     }
    
// }
// const PORT=process.env.PORT||5000
// app.listen(PORT,()=>console.log(`server is running on ${PORT}`))

//=====================================================================================
// const Token=require("./middlewares/token")
// const validation=require("./middlewares/validation")
// const express=require("express")
// const app=express()
// const middlewares=[Token,validation]
// app.get("/about",middlewares,(res,res)=>{
//     res.send("user created")
//     console.log("user logged");
// })
//=====================================================================================

const router=require("./router/testrouter")
const express=require("express")
const app=express()

app.use(express.json())

app.use("/",router)


const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))


const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log(req);
    //res.send("hello world")   //text
    //res.send("<h1>hello world</h1>")   //html
    res.json({
        name:"Yash",
        address:"delhi",
        isLogin:true
    })
})
//path param/varible!
//1.params
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
   // let id=req.params.id;
    res.send("ok");

})
//2.query parameter
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    res.send("got it")
})

app.listen(5000,()=>{
    console.log("server started");
    
});
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const Blog=require("./model/blog");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
console.log(Blog)
//create
app.post("/blogs", async (req, res)=>{
    let title=req.body.tite;
    let body=req.body.body;
    let blog={
        title:title,
        body:body,
        date:Date.now()
    }
    let newBlog=new Blog(blog)
    await newBlog.save()    //data add krne ka function => i/o operation
    res.json({
        success:true,
        message: "blog added",
        data: newBlog
    })
})
//Read
//read all data
//read single data


app.get("/blogs",async(req,res)=>{
    let allBlogs= await Blog.find();
    res.json({
        success:true,
        message:"all data fetched successfully",
        data:allBlogs
    })
})
app.get("/blogs/:id", async(req,res)=>{
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success:true,
        message:"single data fetched successfully",
        data:blog
    })
})
mongoose.connect("mongodb://127.0.0.1:27017/G27DB")
  .then(() => console.log('Connected!'));


app.listen(3001, ()=>{
    console.log("Server started!");
})
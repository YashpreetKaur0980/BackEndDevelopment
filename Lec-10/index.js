const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })
// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })
app.post("/addUser",(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
    let password=req.body.password;
    res.json({
        username,
        password
    })

    console.log(req.body)
    fs.appendFile('user_data.txt',`username: ${username}, password: ${password}\n`, (err)=>{
        if(err){
            console.error('error writing to file', err);
            res.status(500).send('Internal server error');
        }else{
            res.send('user registered successfully');

        }
        
    });

})





app.listen(8787,()=>{
    console.log("server created");
})
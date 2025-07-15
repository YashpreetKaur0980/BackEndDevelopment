const fs = require("fs");


fs.writeFile("../demo2.txt","hello g27. My name is Yashpreet Kaur", function(err,data){
    if(err) return console.log(err);
    console.log("success!")

})
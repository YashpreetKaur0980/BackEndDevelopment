const fs = require("fs")
let users=[
    {
        id:1,
        name:"gur",
        age:"18"

    },
    {
    id:2,
    name:"leen",
    age:"19",
    },

]
fs.writeFile("../users2.txt",JSON.stringify(users,null,2),function(err){
    if(err){
        return console.error("error waiting for file:",err);
    }
    console.log("File created with user data")
});
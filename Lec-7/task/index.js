const fs = require("fs")
// fs.readFile("../users.txt",(err,data)=>{
//     if(err) return console.log("Error reading file 1",err);
//     fs.readFile("../users.txt",(err,data1)=>{
//         if(err) return console.log("Error reading file 2");
//         const users1 = JSON.parse(data);
//         const user2 = JSON.parse(data1);
//         fs.writeFile("../users2.txt", JSON.stringify([...users1, ...user2]), (err) => {
//             if (err) {
//                 return console.error("Error writing file:", err);
//             }
//             console.log("File created with combined user data");
//         });
//     });
// });

async function task(file1,file2,file3){
    let user1=await read(file1);
    console.log(user1)
    let user2=await read(file2);
    // let a=JSON.parse(user1);
    // let b=JSON.parse(user2);
    let allusers = user1.concat(user2);
    let mes= await write(file3,JSON.stringify(allusers));
    console.log(mes)

}
task("../users.txt","../users2.txt","../users3.txt")

// let p=new Promise((resolve,reject)=>{
//    resolve("okay");
// })
// //console.log(p);

// p.then((data)=>{
//   console.log(data);
//   console.log("promise completed");
// })
// .catch(()=>{
//   console.log(err);
// })
let users=[
    {
        id:1,
        age:16,
        name:"yashi"
    },
    {
        
        id:2,
        age:18,
        name:"yashu2"
    
    }
]
/*function isEligible(id){
    //find user in db
    //check age is greater or equal to 18;
    //if else
    return new Promise((resolve,reject)=>{
      let user=users.filter((user)=> user.id==id);
    console.log(user)
    if(!user) return  reject ("no user found");
    if(user.age>=18){
        return resolve ("eligible for vote");
    }else{
        return reject("not eligible");
    }
  
    })
}
isEligible(1).then((data)=>{
    console.log(data);
})
.catch(()=>{
  console.log(err);
 })*/
function buyProduct(product_name,cb){
    let isProduct=null;
    //find product obejct from product array whose name is equal to product_name
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_name){
           isProduct=products[i];
        }
    }
    if(!isProduct){
        cb("product is not avaiable",null);
    }else{
        cb(null,isProduct.amount);
    }
   
}
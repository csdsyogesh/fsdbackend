const fs=require('fs');
const data ="I am NEw "
fs.writeFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("file Created successfully");
})
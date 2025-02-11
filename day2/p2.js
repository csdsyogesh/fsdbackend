const fs=require('fs');
fs.readFile("./data.txt","Utf8",(err,data)=>{
if(err) throw err;
console.log("Dta read from file:",data);
})
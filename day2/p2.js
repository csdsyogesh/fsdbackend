const fs=require('fs');
fs.readFile("./mydir/data.txt","Utf8",(err,data)=>{
if(err) throw err;
console.log("Dta read from file:",data);
})
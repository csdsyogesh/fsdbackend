const fs =require('fs');
fs.rmdir("mydir",(e)=>{
    if(e){
        console.log("error deleting directory: ",e);
        return ;   
    }
    console.log("directory deletd success");
})
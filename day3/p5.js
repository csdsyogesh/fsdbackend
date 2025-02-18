const http =require('http');
const fs=require('fs/promises');
const server =http.createServer(async(req ,res)=>{
    const data =await fs.readFile("./dummyjson.com/products");
    res.writeHead(200,{'content-Type':'application/json'});
    res.end(data);
});
server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    else 
    console.log('serever is runnig');
});
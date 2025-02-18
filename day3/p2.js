const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end('<h1 style="background-color:red; color:white;">Helo baba</h1>');

});
server.listen(900,(err)=>{
    if (err){
        console.error(err);
    }
    else {
    console.log('server is runing in port 90000');
    }
});
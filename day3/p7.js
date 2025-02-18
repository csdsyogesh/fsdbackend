const http = require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    if(req.url=='/home'){
        res.end('welcome home');
    }
    else if(req.url=='/about'){
        res.end('about page se');
    }
    else{
        res.end('page na hai');
    }
});
server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    else 
    console.log('serever is runnig');
});
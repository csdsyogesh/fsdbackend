const http=require('http');
const users=[];
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url==='/getdata' && req.method==='GET'){
        const data={name:'krishna',age:30};
        res.end(JSON.stringify(data))
    }
    else if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const newData=JSON.parse(body)
            console.log(`new Data recive:${JSON.stringify(newData)}`);
            users.push(newData);
            res.end('Data set succefully');
        })

    }
});

server.listen(9000,(err)=>{
    if(err)
        console.error(err);
    else
    console.log('server is running on port 9000');

});
const http =require('http');
const users=[
   { id:1, name: 'nodchd', email:'ejrht@gmail.com'},
   { id:3, name: 'chd', email:'gmail.com'},
]
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application/json'});
    res.end(JSON.stringify(Users));

});
server.listen(9000,()=>{
    console.log('first');
});
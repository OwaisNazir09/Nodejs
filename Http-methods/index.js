//lets add http for a server first 
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.method === 'GET'){
//here we can see we get GET method in console
        console.log(req.method)
        res.end("get message");
    }
    else if(req.method === 'PUT')
    {
        console.log("Put meaasge ")
    }
    else{
     
    console.log("error  ha aav")
        }
})
server.listen(3000,()=>{
    console.log(href = 'http://localhost:3000/')
})
const express = require('express')
const app = express();
const port = 8080;

///lets make a custom plugin

app.use((req,res,next)=>{
    console.log(req.method);
    next();
})
app.use((req,res,next)=>{
    console.log(req.ip);
    next();
})

app.get('/',(req,res)=>{
    res.send("boey ch warai")
})

app.listen(port)
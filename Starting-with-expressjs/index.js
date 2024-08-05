const express  = require("express")
//added express
const app = express();
const port= 8800;

app.get('/',(req,res)=>{
    res.send("hello brother what you do")

})
app.get('/owais',(req,res)=>{
    res.send(`${req.url} how can i help you`)

})



app.listen(port,()=>{
    console.log("port successfully running")

})
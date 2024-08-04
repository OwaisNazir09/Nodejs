//lets import the http for server 

const http = require("http")
const fs = require('fs')

//creating my serevr

//also lets creae a log book 
const myserver = http.createServer((req,res)=>{
    if(req){

        console.log("the serevr has been started and dnt worry ");

        fs.appendFile('./logbook.txt', `${req} \n`,  (err)=> {
            if (err) throw err;
            console.log('Updated!');
          });
          
       
        res.end(fs.readFileSync('C:\\Users\\LOG IN\\Desktop\\Nodejs\\File_handling\\index.js', 'utf8'))
    }else{
        console.log("some error")
    }
 
    
});




//port where we need to sun our server

myserver.listen(8000,()=>{
    console.log( href = 'http://localhost:8000/')
})

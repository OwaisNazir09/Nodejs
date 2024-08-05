//here we will learn hoe we can handle url and its arch....
//eg we have https://www.google.com/
// https: hypertext transfer protocol secure .... its a protocol 
//www.google.com is domain
//last / -> means path 
//after path there could be some additional data like query 
//eg https://search.brave.com/search?q=ahd&source=desktop
//this part is q=ahd&source=desktop is a query 

//lts install url package so we get additional info about urls
//use npm install url


//lets import the http for server 
//lets import the http for server 

const http = require("http")
const fs = require("fs")
const url = require("url")
//creating my serevr

//also lets creae a log book 
const myserver = http.createServer((req,res)=>{
    if(req){

        console.log("the serevr has been started and dnt worry ");

        fs.appendFile('./logbook.txt',`${req.url.parse}` ,(err)=> {
            if (err) throw err;
            console.log('Updated!');
            console.log(url);
          });
          
       
        res.end(fs.readFileSync('C:\\Users\\LOG IN\\Desktop\\Nodejs\\File_handling\\file.js', 'utf8'))
    }else{
        console.log("some error")
    }
 
    
});




//port where we need to sun our server

myserver.listen(8000,()=>{
    console.log( href = 'http://localhost:8000/')
})

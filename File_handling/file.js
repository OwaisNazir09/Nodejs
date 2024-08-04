//import file system package or module  to perforn operations on files

const fs = require('fs')


//creating a file using writeFileSync operation 
//the main difference between using async AND Sync is that ,Sync always returns a value that wr can save it into some variable and async expects a callback for result  and error 


fs.writeFile("./helllo.js","details",(err)=>{})

fs.writeFileSync("./hello.js","details")

//  lets do this while storing valus in a variable
const data = fs.readFileSync('./hello.js', 'utf8');
console.log(data);
  
//using async method
fs.readFile ('./hello.js','utf8',(err,res)=>{
    if(err){
        console.log("there is an error somewhere")
    }else{
        console.log(res)
    }
})
//upate a file bexause if we use writefile IT  is going to delete all the data then insert other data
//so we use append fs.appendFile()

fs.appendFile('./hello.js', ' This is my text.',  (err)=> {
  if (err) throw err;
  console.log('Updated!');
});

//delete a specific file
fs.unlink('./hello.js',(err)=>{});
fs.unlink('./helllo.js',(err)=>{});
const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//to use momongo db first twe have rewuire mongoosoe
const mongoose = require('mongoose');




// 2ndd  create a schema how its going to look 
const userschema = new mongoose.Schema({ 

        
        first_name:{
            type:String,
             required :true 
        },
        last_name:{
            type:String,
             required :true 
        },
        email:{
            type:String,
             required :true 
             ,uinque:true
        }
    
})
//make a model 

const usermodel= mongoose.model('usersdata',userschema)

// PUT endpoint to create a new user
app.put('/', async (req, res) => {
    const { id, first_name, last_name, email } = req.body;

    try {
        const newUser = await usermodel.create({
        
            first_name,
            last_name,
            email
        });
        console.log(newUser)
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});



app.get('/', async (req, res) => {
    try {
        // Fetch all user data from the database
        const saveddatabsedata = await usermodel.find({});;

        // Map the data to return only first_name and email
        const data1 = saveddatabsedata.map(user => ({
            first_name: user.first_name,
            email: user.email
        }));
 
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).send({ error: 'An error occurred while fetching user data' });
    }
});
//find by id 
app.get('/:id',async(req,res)=>{
    const datbaseid =  req.params.id;
    const findeduser = await usermodel.findById(datbaseid);
  res.json(findeduser)


})
//conct to mongoosr
mongoose.connect('mongodb://127.0.0.1:27017/').then(
    ()=>console.log("mongo connected")
).catch((err)=>{
    console.log(err)
})





















// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

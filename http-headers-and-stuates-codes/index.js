const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const user = require('./MOCK_DATA.json');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define a route
app.get('/', (req, res) => {
    res.json('hello madam');
});

// Define a route to display user names
app.get('/names', (req, res) => {
    const data1 = user.map(user => user.first_name);
    res.json(data1); // Sending the array of names as JSON
});

// Define a route to display a specific user's name by ID
app.get('/names/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const foundUser = user.find(user => user.id === id);
    
    if (foundUser) {
        res.send(foundUser.first_name);
    } else {
        res.status(404).send('User not found');
    }
});

// Define a route to update user names
app.post('/api/names', (req, res) => {
    const newUserData = req.body;
    user.push({ ...newUserData, id: user.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (err) => {
        if (err) {
            console.error(err);
            return res.qsend('Error updating user data');
        }
//this status code will be shoen when the creatuin is successful

        res.status(201).send('User data updated successfully');
    });
});

//going to ude put 
app.delete('/api/names/:id',(req,res)=>{
    const userid = req.params.id;
   const patcheddata= user.filter(u=> u.id != userid)

   fs.writeFile('./MOCK_DATA.json' ,JSON.stringify(patcheddata), (err) => {
    if (err) {
        console.error(err);
        return res.send('Error updating user data');
    }

    res.send('User data updated successfully');
});

})


app.patch('/api/names/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updates = req.body;

    const foundUserIndex = user.findIndex(u => u.id === userId);
    if (foundUserIndex === -1) {
        return res.status(404).send('User not found');
    }

    // Update the user with the provided data
    user[foundUserIndex] = { ...user[foundUserIndex], ...updates };

    // Write the updated data back to the JSON file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user, null, 2), (writeErr) => {
        if (writeErr) {
            console.error(writeErr);
            return res.status(500).send('Error updating user data');
        }

        res.send('User data updated successfully');
    });
});




// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});

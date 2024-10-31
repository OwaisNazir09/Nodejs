const express = require("express");
const app = express();
const fs = require("fs");

const port = 3000; 
const file = fs.createReadStream("./160-KB.txt", "utf-8");
const write = fs.createWriteStream("./helloji.txt","utf-8")

let data = ""; 
file.pipe(write)
const pipeddata = fs.createReadStream("./helloji.txt","utf-8")

app.get("/", (req, res) => {
    const pipeddata = fs.createReadStream("./helloji.txt","utf-8")

    pipeddata.on("data", function (chunk) {

        data += chunk;
        
    });
   

    pipeddata.on("end", function () {
        res.end(data);
    });

    pipeddata.on("error", function (err) {
        console.error("Error reading file:", err);
        res.status(500).send("Internal Server Error");
    });
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

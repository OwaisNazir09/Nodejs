const mongoose = require('mongoose');

function mongooseconnection(url) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = { mongooseconnection };

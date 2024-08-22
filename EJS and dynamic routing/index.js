const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.get('/:id/:jack', (req, res) => {
    const templateName = req.params.id;
    console.log(templateName)

    res.render(templateName);
});

app.listen(9090, () => {
    console.log('Server is running on port 9090');
});

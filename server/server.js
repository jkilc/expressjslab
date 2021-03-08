const express = require('express');

let app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello from the web server side ...')
});

app.use('/', (req, res, next) => {
    console.log(req.url)
    next()
});

app.listen(3000)

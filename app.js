var express = require('express');

var app = express();

var port = 5000;

// static files first
app.use(express.static('public'));
app.use(express.static('src/views'));

// routes next
app.get('/', function (req, res) {
    res.send('Hello Greg!');
});

app.get('/books', function (req, res) {
    res.send('Hello Books!');
});

app.listen(port, function (err) {
    console.log('running server on port: ' + port);
});

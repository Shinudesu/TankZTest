const express = require('express');
const http = require('http');
const path = require ('path');

var app = express();
var server = http.Server(app);
var port = process.env.PORT || 3000

app.set('port', port);
app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './public/index.html'));
});

server.listen(port, (error) => {
    if (error) {
        console.log(`Error listening to port ${server.address().port}. Reason: ${error}`)
    }

    console.log(`Server started listening to port ${server.address().port}`);
});
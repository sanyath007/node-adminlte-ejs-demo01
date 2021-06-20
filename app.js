const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello NodeJS !!!');
});

const server = app.listen('5000', () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log(`Server listening on http://${host}:${port}`);
});

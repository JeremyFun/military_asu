const express = require('express');
const app = express();
const PORT = 8080;
require('./src/database');

const bodyParser = require('body-parser');

const tableRouter = require('./src/routes/message.router');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// app.use('/posts', postRouter);
app.use('/table', tableRouter);


app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});
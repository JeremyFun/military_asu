const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors')
require('./src/database');

const bodyParser = require('body-parser');

const tableRouter = require('./src/routes/message.router');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors())
app.use(bodyParser.json());

// app.use('/posts', postRouter);
app.use('/table', tableRouter);

app.get('/', (req, res) => {
    return res.send("Hello world")
})


app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});
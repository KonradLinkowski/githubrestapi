const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// set application port
const port = process.env.PORT || 3000;

const app = express();

// allow cors
app.use(cors());


// parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// server response
app.get('/', (req, res) => {
    res.end("Test")
});

// run the server
app.listen(port, () => {
    console.log("Server listening at port: " + port);
});
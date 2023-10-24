// First, import the Express module into the file.
const express = require('express');

//create an instance of the express object and set it to a variable.
const app = express();

//create a route handler to handle GET requests in the '/' root path.
app.get('/', (req, res) => {
    res.send('Hello World!')
});

//Open a port to listen to, usually 3000.
app.listen('3000', () => {
    console.log("App is listening on port 3000")
});
// First, import the Express module into the file.
const express = require('express');
//Also import router file
const router = require('./Routers/ps4.js');

//create an instance of the express object and set it to a variable.
const app = express();

// create a route handler to handle GET requests in the '/' root path.
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

//Instead of doing the above, use app.use with the router file just created.
//The path here is going to be the prefix of the complete route. e.g. if it's '/path' and the one in the router file is '/meow' then full path would be '/path/meow'
app.use('/ps4', router);

//Open a port to listen to, usually 3000.
app.listen('3000', () => {
    console.log("App is listening on port 3000")
});
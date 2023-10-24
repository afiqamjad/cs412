//Import express
const express = require('express');

//Create an instance of express.router
const router = express.Router();

//use the router to make the path
router.get('/', (req, res) => {
    res.send("This is the ps4ysdfhbaihnfas page!")
});

//Export the path
module.exports = router;
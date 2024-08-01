'use strict';

const express = require("express");
const app = express();
const morgan = require('morgan');
const session = require('express-session');
const { usersRouter } = require("./routers/usersRouter");
const { roastsRouter } = require("./routers/roastsRouter");

// Declare variables needed for the server
const serverPort = 8080;


// Set up logging middleware
app.use(morgan('dev'));

// Set up JSON middleware to handle incoming JSON
app.use(express.json());


// Define routing for server
app.use('/users', usersRouter)
app.use('/roasts', roastsRouter)

app.get('/', (req, res) => res.send('test ok'));



app.listen(serverPort, () => console.log('The server is listening on port', serverPort));

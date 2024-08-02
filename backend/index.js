'use strict';

const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const pool = require('./database/db');
const pgSession = require('connect-pg-simple')(session);
const { usersRouter } = require("./routers/usersRouter");
const { roastsRouter } = require("./routers/roastsRouter");

require('dotenv').config()

// Declare variables needed for the server
const serverPort = 8080;

// Set up logging middleware
app.use(morgan('dev'));

// Enable CORS
app.use(cors());

// Enable express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new pgSession({
        pool,
        createTableIfMissing: true
    }),
    cookie: {
        secure: process.env.API_ENV === 'DEVELOPMENT' ? false : true,
        maxAge: 1000 * 60 * 60 * 24,
    }
}))

// Set up JSON middleware to handle incoming JSON
app.use(express.json());


// Define routing for server
app.use('/user', usersRouter)
app.use('/roasts', roastsRouter)

app.get('/', (req, res) => res.send('test ok'));



app.listen(serverPort, () => console.log('The server is listening on port', serverPort));

'use strict';

const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./database/db');
const { usersRouter } = require("./routers/usersRouter");
const { roastsRouter } = require("./routers/roastsRouter");

require('dotenv').config()

// Declare variables needed for the server
const serverPort = 8080;

// Trust caddy proxy server
app.set('trust proxy', 1)

// Set up logging middleware
app.use(morgan('dev'));

// Enable CORS
app.use(cors({
    origin: 'https://roast.nolanmiller.me',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true
}));

app.options(0, cors());

// Enable express-session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: db.store,
    cookie: {
        secure: true,
        maxAge: 1000 * 60 * 60 * 24,
	httpOnly: true
    }
}))

// Set up JSON middleware to handle incoming JSON
app.use(express.json());

// Parse cookies to access JWT
app.use(cookieParser());


// Define routing for server
app.use('/user', usersRouter)
app.use('/roasts', roastsRouter)

app.get('/', (req, res) => res.send('test ok'));



app.listen(serverPort, () => console.log('The server is listening on port', serverPort));

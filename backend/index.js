'use strict';

const express = require("express");
const oasTools = require("@oas-tools/core");
const app = express();
const morgan = require('morgan');
const session = require('express-session');


app.use(morgan('tiny'));

app.get('/', (req, res) => res.send('test ok'));

app.use(express.json());
const serverPort = 8080;

app.listen(serverPort, () => console.log('The server is listening on port ', serverPort));

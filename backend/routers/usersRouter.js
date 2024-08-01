const express = require('express');
const User = require('../controllers/User');


usersRouter = express.Router();

usersRouter.get('/test', (req, res) => res.send('test ok'));

usersRouter.post('/', (req, res, next) => User.createUser(req, res, next))
usersRouter.get('/', (req, res, next) => User.getAllUsers(req, res, next))
usersRouter.get('/:username', (req, res, next) => User.getUserByUsername(req, res, next))
usersRouter.delete('/:username', (req, res, next) => User.removeUserByUsername(req, res, next))
usersRouter.put('/:username', (req, res, next) => User.updateUserByUsername(req, res, next))
usersRouter.post('/login', (req, res, next) => User.loginUser(req, res, next))
usersRouter.post('/login', (req, res, next) => User.logoutUser(req, res, next))


module.exports.usersRouter = usersRouter;
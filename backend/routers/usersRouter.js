const express = require('express');
const User = require('../controllers/User');


usersRouter = express.Router();

usersRouter.get('/test', (req, res) => res.send('test ok'));

usersRouter.post('/login', (req, res, next) => User.loginUser(req, res, next, req.body))
usersRouter.post('/logout', (req, res, next) => User.logoutUser(req, res, next))
usersRouter.get('/:username', (req, res, next) => User.getUserByUsername(req, res, next, req.params.username))
usersRouter.delete('/:username', (req, res, next) => User.removeUserByUsername(req, res, next, req.params.username))
usersRouter.put('/:username', (req, res, next) => User.updateUserByUsername(req, res, next, req.body, req.params.username))
usersRouter.post('/', (req, res, next) => User.createUser(req, res, next, req.body))
usersRouter.get('/', (req, res, next) => User.getAllUsers(req, res, next))


module.exports.usersRouter = usersRouter;
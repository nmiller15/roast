const express = require('express');
const User = require('../controllers/User');


usersRouter = express.Router();

usersRouter.get('/test', (req, res) => res.send('test ok'));

usersRouter.post('/', User.createUser(req, res, next))
usersRouter.get('/', User.getAllUsers(req, res, next))
usersRouter.get('/:username', User.getUserByUsername(req, res, next))
usersRouter.delete('/:username', User.removeUserByUsername(req, res, next))
usersRouter.put('/:username', User.updateUserByUsername(req, res, next))
usersRouter.post('/login', User.loginUser(req, res, next))
usersRouter.post('/login', User.logoutUser(req, res, next))


module.exports.usersRouter = usersRouter;
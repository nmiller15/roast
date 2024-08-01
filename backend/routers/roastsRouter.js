const express = require('express');
const Roast = require('../controllers/Roast');


roastsRouter = express.Router();

roastsRouter.get('/test', (req, res) => res.send('test ok'));

roastsRouter.post('/', (req, res, next) => Roast.addRoast(req, res, next, req.body))
roastsRouter.get('/', (req, res, next) => Roast.getUserRoasts(req, res, next, req.query.username))
roastsRouter.delete('/:id', (req, res, next) => Roast.roastsRoastIdDELETE(req, res, next, req.params.id))
roastsRouter.get('/:id', (req, res, next) => Roast.roastsRoastIdGET(req, res, next, req.params.id))
roastsRouter.put('/:id', (req, res, next) => Roast.roastsRoastIdPUT(req, res, next, req.params.id))


module.exports.roastsRouter = roastsRouter;
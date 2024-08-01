const express = require('express');
const Roast = require('../controllers/Roast');


roastsRouter = express.Router();

roastsRouter.get('/test', (req, res) => res.send('test ok'));

roastsRouter.post('/', (req, res, next) => Roast.addRoast(req, res, next))
roastsRouter.get('/', (req, res, next) => Roast.getUserRoasts(req, res, next))
roastsRouter.delete('/:id', (req, res, next) => Roast.roastsRoastIdDELETE(req, res, next))
roastsRouter.get('/:id', (req, res, next) => Roast.roastsRoastIdGET(req, res, next))
roastsRouter.put('/:id', (req, res, next) => Roast.roastsRoastIdPUT(req, res, next))


module.exports.roastsRouter = roastsRouter;
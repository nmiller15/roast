const express = require('express');
const Roast = require('../controllers/Roast');


roastsRouter = express.Router();

roastsRouter.get('/test', (req, res) => res.send('test ok'));

roastsRouter.post('/', Roast.addRoast(req, res, next))
roastsRouter.get('/', Roast.getUserRoasts(req, res, next))
roastsRouter.delete('/:id', Roast.roastsRoastIdDELETE(req, res, next))
roastsRouter.get('/:id', Roast.roastsRoastIdGET(req, res, next))
roastsRouter.put('/:id', Roast.roastsRoastIdPUT(req, res, next))


module.exports.roastsRouter = roastsRouter;
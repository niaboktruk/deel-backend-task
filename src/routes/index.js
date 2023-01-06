const express = require('express');
const contractRoute = require('./contract');
const jobRoute = require('./job');
const profileRoute = require('./profile');
const adminRoute = require('./admin');

const routes = express.Router();

routes.use('/contracts', contractRoute);
routes.use('/jobs', jobRoute);
routes.use('/balances', profileRoute);
routes.use('/admin', adminRoute);

module.exports = routes;
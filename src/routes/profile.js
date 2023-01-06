const express = require('express');
const { deposit } = require('../modules/profiles/profiles.controller');

const profileRoute = express.Router();
profileRoute.post('/deposit/:userId', deposit);

module.exports = profileRoute;
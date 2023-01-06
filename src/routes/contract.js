const express = require('express');
const { listContracts, getContract } = require('../modules/contracts/contracts.controller');

const contractRoute = express.Router();

contractRoute.get('/', listContracts);
contractRoute.get('/:id', getContract);

module.exports = contractRoute;
const express = require('express');
const { getBestProfession, listBestClients } = require('../modules/admin/admin.controller');

const adminRoute = express.Router();

adminRoute.get('/best-profession', getBestProfession);
adminRoute.get('/best-clients', listBestClients);

module.exports = adminRoute;
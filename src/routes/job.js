const express = require('express');
const { getUnpaidJob, payForJob } = require('../modules/jobs/jobs.controller');

const jobRoute = express.Router();

jobRoute.get('/unpaid', getUnpaidJob);
jobRoute.post('/:job_id/pay', payForJob);

module.exports = jobRoute;
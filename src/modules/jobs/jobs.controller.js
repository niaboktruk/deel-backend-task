const getUnpaidJobsService = require('./services/listUnpaidJobs.service');
const payForJobsService = require('./services/jobPayments.service');
const { AppError } = require('../../shared/AppError');

/**
 * Get all unpaid jobs for a user (***either*** a 
 * client or contractor), for ***active contracts only***.
 */
const getUnpaidJob = async (req, res) => {
  const profileId = req.profile.id;
  const jobs = await getUnpaidJobsService(profileId);
  if (!jobs) throw new AppError('No unpaid jobs found', 404);
  res.json(jobs);
};

/**
 * Pay for a job, a client can only pay if his balance >= the amount to pay. 
 * The amount should be moved from the client's balance to the contractor balance.
 */
const payForJob = async (req, res) => {
  const profileId = req.profile.id;
  const jobId = req.params.job_id;
  await payForJobsService(jobId, profileId);
  res.json();
};

module.exports = {
  getUnpaidJob,
  payForJob,
};
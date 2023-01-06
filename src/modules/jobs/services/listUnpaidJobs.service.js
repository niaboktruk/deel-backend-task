const { listUnpaidJobs } = require('../job.repository');

const listUnpaidJobsService = async (profile_id) => listUnpaidJobs(profile_id);

module.exports = listUnpaidJobsService;
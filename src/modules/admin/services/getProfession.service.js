const { getJobsSumPerProfession } = require('../../jobs/job.repository');

const getProfessionService = async (start, end) => getJobsSumPerProfession(start, end);

module.exports = getProfessionService;
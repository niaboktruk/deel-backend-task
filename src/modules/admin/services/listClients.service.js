const { getPaidJobsSumPerClient } = require('../../jobs/job.repository');

const listClientsService = async (start, end, limit) => getPaidJobsSumPerClient(start, end, limit);

module.exports = listClientsService;
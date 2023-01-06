const { listNonTerminatedContracts } = require('../contract.repository');

const listContractsService = async (profileId) => listNonTerminatedContracts(profileId);

module.exports = listContractsService;
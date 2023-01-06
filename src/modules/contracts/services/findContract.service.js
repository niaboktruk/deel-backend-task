const { findContractById } = require('../contract.repository');

const findContractService = async (profileId, ContractorId) => findContractById(profileId, ContractorId);

module.exports = findContractService;
const getContractService = require('./services/findContract.service');
const listContractsService = require('./services/listContracts.service');
const { AppError } = require('../../shared/AppError');

/**
 * Returns a list of contracts belonging to a user (client or contractor), 
 * the list should only contain non terminated contracts.
 */
const listContracts = async (req, res) => {
  const profileId = req.profile.id;
  const contract = await listContractsService(profileId);
  if (!contract) throw new AppError('No contracts found for this user', 404);
  res.json(contract);
};

/**
 * This API is NOT broken anymore 😵! it should return 
 * the contract only if it belongs to the profile calling. better fix that!
 */
const getContract = async (req, res) => {
  const { id } = req.params;
  const ContractorId = req.profile.id;
  const contract = await getContractService(id, ContractorId);
  if (!contract) throw new AppError('No contracts found for this user', 404);
  res.json(contract);
};

module.exports = {
  listContracts,
  getContract,
};
const getBestProfessionService = require('./services/getProfession.service');
const listBestClientsService = require('./services/listClients.service');
const { AppError } = require('../../shared/AppError');

/**
 * Returns the profession that earned the most money (sum of jobs paid) 
 * for any contactor that worked in the query time range.
 */
const getBestProfession = async (req, res) => {
  const { start, end } = req.query;
  const bestProfession = await getBestProfessionService(start, end);
  if (!bestProfession) throw new AppError('Profession not found', 404);
  res.json(bestProfession);
};

/**
 * Returns the clients the paid the most for jobs in the query time period.
 * Limit query parameter should be applied, default limit is 2.
 */
const listBestClients = async (req, res) => {
  const { start, end, limit } = req.query;
  const bestClients = await listBestClientsService(start, end, limit || 2);
  if (!bestClients) throw new AppError('Clients not found', 404);
  res.json(bestClients);
};

module.exports = {
  getBestProfession,
  listBestClients,
};
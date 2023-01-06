const depositServices = require('./services/deposit.services');

/**
 * Deposits money into the the the balance of a client, 
 * a client can't deposit more than 25% his total of jobs 
 * to pay. (at the deposit moment)
 */
const deposit = async (req, res) => {
  const { userId } = req.params;
  const { amount } = req.body;
  const profileId = req.profile.id;
  await depositServices(userId, profileId, amount);
  res.json();
};

module.exports = {
  deposit,
};
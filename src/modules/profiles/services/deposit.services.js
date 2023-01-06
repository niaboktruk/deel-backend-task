const { updateBalance } = require('../profile.repository');
const { getTotalJobsToPay } = require('../../jobs/job.repository');
const { AppError } = require('../../../shared/AppError');

const depositServices = async (userId, profileId, amount) => {
  if (userId != profileId) throw new AppError(`Client can't deposit to another client`, 400);
  const totalJobsToPay = await getTotalJobsToPay(userId);
  if (amount > totalJobsToPay[0].total / 4) throw new AppError('Amount greater than limit allowed', 400);
  await updateBalance(userId, amount, 'add');
};

module.exports = depositServices;
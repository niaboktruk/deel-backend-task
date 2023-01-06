const { getJob, setJobPaid } = require('../job.repository');
const { getProfile, updateBalance } = require('../../profiles/profile.repository');
const { AppError } = require('../../../shared/AppError');
const { sequelize } = require('../../../model');

const jobPaymentsService = async (jobId, profileId) => {
  const job = await getJob(jobId);
  const clientProfile = await getProfile(profileId);
  const contract = await job.getContract();
  const contractorId = contract.get('ContractorId');

  const jobPrice = job.get('price');

  if (clientProfile.get('balance') < jobPrice) { throw new AppError('Insufficient funds', 400); }

  if (job.get('paid')) { throw new AppError('Already paid', 400); }

  const transactionHandler = await sequelize.transaction();
  try {
    await setJobPaid(jobId, transactionHandler);
    await updateBalance(contractorId, jobPrice, 'add', transactionHandler);
    await updateBalance(profileId, jobPrice, 'rem', transactionHandler);
    await transactionHandler.commit();
  } catch (error) {
    await transactionHandler.rollback();
  }
};

module.exports = jobPaymentsService;
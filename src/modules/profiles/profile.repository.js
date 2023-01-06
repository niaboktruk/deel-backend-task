const { Profile } = require('../../model');

const getProfile = async (profileId) => await Profile.findOne({ where: { id: profileId } });

const updateBalance = async (profileId, value, operation, t) => {
  const profile = await Profile.findOne({ where: { id: profileId } });
  const balance = profile.get('balance');
  const newBalance = (operation === 'add') ? balance + value : balance - value;
  profile.set({
    balance: newBalance,
  });
  return await profile.save({ transaction: t });
};

module.exports = {
  getProfile,
  updateBalance,
};
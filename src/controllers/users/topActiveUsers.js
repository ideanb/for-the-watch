const usersRepository = require('../../repositories/users');
const utils = require('../../utils');
const UserModel = require('../../models/User');

const mapResponse = data => {
  const { listings = [], count } = data;
  return {
    ...UserModel(data),
    count,
    listings
  }
}

const getTopActiveUsers = async (req, res) => {
  try {
    const { page = 1, size = 3 } = req.query;
    const offset = utils.getOffset(page, size);
    const { rows } = await usersRepository.topActiveUsers(
      offset,
      size
    );
    const topUsers = rows.map(mapResponse);
    res.send(topUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getTopActiveUsers;

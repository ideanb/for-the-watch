const usersRepository = require('../../repositories/users');
const utils = require('../../utils');

const getTopActiveUsers = async (req, res) => {
  try {
    const { page = 1, size = 3 } = req.query;
    const offset = utils.getOffset(page, size);
    const { rows: topUsers } = await usersRepository.topActiveUsers(
      offset,
      size
    );
    res.send(topUsers);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = getTopActiveUsers;

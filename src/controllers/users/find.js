const usersRepository = require('../../repositories/users');

const find = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    res.status(400).send("bad request");
    return;
  }

  const user = await usersRepository.find(userId);

  if (!user.length) {
    res.status(404).send("not found");
    return;
  }
  res.json(user[0]);
};

module.exports = find;

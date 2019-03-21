const getTopActiveUsers = (req, res) => {
  res.json([{ name: 'iduart' }, { name: 'Dean' }]);
};

module.exports = getTopActiveUsers;
const getTopActiveUsers = (req, res) => {
  res.json([{ name: 'iduart' }, { name: 'Dean' }]);

  // [
  //   {
  //     id: {users.id},
  //     createdAt: {users.created_at},
  //     name: {users.name},
  //     count: {count of applications in the past week's time}
  //     listings: [
  //       {listings.name},
  //       {listings.name},
  //       {listings.name}
  //     ]
  //   },
  //   ...
  // ]
};

module.exports = getTopActiveUsers;
const User = (user = {}) => {
  const { id, name, created_at } = user;
  return {
    id,
    name,
    createdAt: created_at
  }
}

module.exports = User;
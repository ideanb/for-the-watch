const Listing = (listing = {}) => {
  const { id, name, created_at, description } = listing;
  return {
    id,
    name,
    description,
    createdAt: created_at
  }
}

module.exports = Listing;
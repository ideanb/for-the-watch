const Company = (company) => {
  const { id, name, created_at } = company;
  return {
    id,
    createdAt: created_at,
    name
  }
} 

module.exports = Company;
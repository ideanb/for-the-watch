const getOffset = (page, limit) => {
  return (page - 1) * limit;
}

module.exports = {
  getOffset
}
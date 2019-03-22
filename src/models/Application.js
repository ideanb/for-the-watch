const Application = (application = {}) => {
  const { id, created_at, cover_letter } = application;
  return {
    id,
    coverLetter: cover_letter,
    createdAt: created_at
  }
}

module.exports = Application;
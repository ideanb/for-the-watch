const { CONNECTION_STRING } = process.env;

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:123456@localhost:5432/test'
});

module.exports = knex;

const { CONNECTION_STRING } = process.env;

const knex = require('knex')({
  client: 'pg',
  connection: CONNECTION_STRING
});

module.exports = knex;

const knex = require('../helpers/knex');

const find = async userId => {
  return knex('users').where({ id: userId });
};

const topActiveUsers = (offset, limit) => {
  const query = `
    select max(u.id) as id,
    max(u.created_at) as created_at,
    max(u.name) as name,
    count(distinct ap.listing_id) as count,
    (array_agg(DISTINCT l.name))[1:3] as listings
    from applications ap
    join users u on u.id = ap.user_id
    join listings l on l.id = ap.listing_id
    group by ap.user_id
    order by count desc
    offset ${offset} limit ${limit};
  `;
  return knex.raw(query);
};

module.exports = {
  find,
  topActiveUsers
};

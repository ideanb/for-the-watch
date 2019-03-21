const knex = require('../helpers/knex');

const find = async userId => {
  return knex('users').where({ id: userId });
};

const topActiveUsers = () => {
  const query = `
    select max(u.id) as id,
    count(ap.listing_id) as total_applications,
    max(u.name) as name,
    max(u.created_at) as created_at,
    array_agg(DISTINCT l.name) as listings
    from applications ap
    join users u on u.id = ap.user_id
    join listings l on l.id = ap.listing_id
    group by ap.user_id
    order by total_applications desc
    offset 0 limit 3;
  `;
};

module.exports = {
  find,
  topActiveUsers
};

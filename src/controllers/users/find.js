const usersRepository = require('../../repositories/users');
const UserModel = require('../../models/User');
const CompanyModel = require('../../models/Company');
const ListingModel = require('../../models/Listing');
const ApplicationModel = require('../../models/Application');

const mapApplication = application => {
  const { listing = {} } = application;
  return {
    ...ApplicationModel(application),
    listing: {
      ...ListingModel(listing)
    }
  };
};

const mapResponse = data => {
  const { companies = [], listings = [], applications = [] } = data;
  return {
    ...UserModel(data),
    companies: [...companies.map(CompanyModel)],
    createdListings: [...listings.map(ListingModel)],
    applications: applications ? [...applications.map(mapApplication)] : []
  };
};

const find = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      res.status(400).send('bad request');
      return;
    }

    const { rows } = await usersRepository.find(userId);

    if (!rows.length) {
      res.status(404).send('not found');
      return;
    }

    const user = mapResponse(rows[0]);
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = find;

const expect = require("chai").expect;
const ListingModel = require('../../models/Listing');

it("Should return a correct object structure", () => {
  const listing = ListingModel({});
  const keys = ["id", "name", "description", "createdAt"];
  expect(Object.keys(listing)).to.eql(keys);
})
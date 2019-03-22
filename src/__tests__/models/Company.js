const expect = require("chai").expect;
const CompanyModel = require('../../models/Company');

it("Should return a correct object structure", () => {
  const company = CompanyModel({});
  const keys = ["id", "createdAt", "name"];
  expect(Object.keys(company)).to.eql(keys);
})
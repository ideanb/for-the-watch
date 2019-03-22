const expect = require("chai").expect;
const UserModel = require('../../models/User');

it("Should return a correct object structure", () => {
  const user = UserModel({});
  const keys = ["id", "name", "createdAt"];
  expect(Object.keys(user)).to.eql(keys);
})
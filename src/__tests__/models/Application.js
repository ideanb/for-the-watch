const expect = require("chai").expect;
const ApplicationModel = require('../../models/Application');

it("Should return a correct object structure", () => {
  const application = ApplicationModel({});
  const keys = ["id", "coverLetter", "createdAt"];
  expect(Object.keys(application)).to.eql(keys);
})
const expect = require('chai').expect;
const utils = require('../../utils');

it("Should return correct offset", () => {
  const [page, size] = [1, 3];
  const offset = (page - 1) * size;
  expect(utils.getOffset(page, size)).to.equal(offset);
})
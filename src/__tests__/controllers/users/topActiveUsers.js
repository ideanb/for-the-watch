const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('supertest');
const app = require('../../../app');
const userRepository = require('../../../repositories/users');
const utils = require('../../../utils');

let userRepositoryStub;
beforeEach(() => {
  userRepositoryStub = sinon.stub(userRepository, 'topActiveUsers');
  userRepositoryStub.returns(
    new Promise((res, rej) => {
      res({ rows: [] });
    })
  );
});

afterEach(() => {
  userRepositoryStub.restore();
});

it("Should call repository with default params", async done => {
  const [page, size] = [1, 3];
  const offset = utils.getOffset(page, size);
  await request(app).get('/topActiveUsers');
  expect(userRepositoryStub.calledWith(offset, size)).to.be.true;
  done();
})

it("Should call repository with query string params", async done => {
  const [page, size] = [2000, 3];
  const offset = utils.getOffset(page, size);
  await request(app).get(`/topActiveUsers?page=${page}`);
  expect(userRepositoryStub.calledWith(offset, size)).to.be.true;
  done();
})
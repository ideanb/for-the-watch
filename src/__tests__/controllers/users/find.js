const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('supertest');
const app = require('../../../app');
const userRepository = require('../../../repositories/users');

let userRepositoryStub;
beforeEach(() => {
  userRepositoryStub = sinon.stub(userRepository, 'find');
  userRepositoryStub.returns(
    new Promise((res, rej) => {
      res({ rows: [] });
    })
  );
});

afterEach(() => {
  userRepositoryStub.restore();
});

it('Should return a 400 when no userId is sent', async done => {
  const response = await request(app).get('/users');
  expect(response.statusCode).to.equal(400);
  done();
});

it('Should return a 404 when no user is found', async done => {
  const response = await request(app).get('/users?userId=123');
  expect(response.statusCode).to.equal(404);
  done();
});

it('Should return a 200 when user is found', async done => {
  userRepositoryStub.returns(
    new Promise((res) => {
      res({ rows: [{ id: 123 }] });
    })
  );
  const response = await request(app).get('/users?userId=123');
  expect(response.statusCode).to.equal(200);
  done();
});

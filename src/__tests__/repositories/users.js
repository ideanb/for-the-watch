const expect = require('chai').expect;
const sinon = require('sinon');
const userRepository = require('../../repositories/users');
const knex = require('../../helpers/knex');

let knexStub;
beforeEach(() => {
  knexStub = sinon.stub(knex, 'raw');
});

afterEach(() => {
  knexStub.restore();
});

it('Should call knex raw when trying to find a user', () => {
  userRepository.find(123);
  expect(knexStub.calledOnce).to.be.true;
});

it('Should call knex raw when trying to find a get top active users', () => {
  userRepository.topActiveUsers();
  expect(knexStub.calledOnce).to.be.true;
});


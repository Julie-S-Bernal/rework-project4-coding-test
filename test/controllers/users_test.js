/* global api, describe, it, expect, before, after, afterEach, should */
require('../client/helper');

const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');
const Travel = require('../../models/travel');
const User = require('../../models/user');


const userData = [{
  name: 'test',
  surname: 'test',
  email: 'test@test.com',
  password: 'test'

}];

describe('POST /api/register', () => {

  after(done => {
    User.remove(done);
  });
  it( 'secret should not be null', done => {
    should.exist(secret);

});

  it('should return a 422 response with incorrect details', done => {
    api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send({ email: 'bad', password: 'bad' })
      .expect(422, done);
  });

  it('should return a 200 response', done => {
    api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(userData[0])
      .expect(200, done);
  });

  it('should return an object', done => {
    api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(userData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should create a user object', done => {
    api
      .post('/api/register')
      .set('Accept', 'application/json')
      .send(userData[0])
      .end(() => {
        User.findOne({ email: userData[0].email }, (err, user) => {
          expect(user).to.be.an('object');
          expect(user.username).to.equal(userData[0].username);
          expect(user.email).to.equal(userData[0].email);
          done();
        });
      });
  });
});


const travel = [{
  budget: 5000,
  startTravelDate: new Date(),
  endTravelDate: new Date(),
  country: 'Japan',
  hotelCost: 1500,
  travelCost: 50,
  extra: 500,
  foodCost: 1500,
  transportation: 0,
  extra_money_for_set_week: 0
}, {
  budget: 800,
  startTravelDate: new Date(),
  endTravelDate: new Date(),
  country: 'France',
  hotelCost: 200,
  travelCost: 100,
  extra: 200,
  foodCost: 150,
  transportation: 0,
  extra_money_for_set_week: 0
}];

describe('POST /api/travels', () => {
  let token = null;

  before(done => {
    User.create({
      name: 'test',
      surname: 'test',
      email: 'test@test.com',
      password: 'test'
    }, (err, user) => {
      token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      done(err);
    });
  });

  after(done => {
    User.remove(done);
  });

  afterEach(done => {
    Travel.remove(done);
  });

  it('should return a 401 response', done => {
    api
      .post('/api/travels')
      .set('Accept', 'application/json')
      .send(travel[0])
      .expect(401, done);
  });

  it('should return a 201 response with a token', done => {
    api
      .post('/api/travels')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(travel[0])
      .expect(201, done);
  });

  it('should return an object', done => {
    api
      .post('/api/travels')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(travel[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .post('/api/travels')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(travel[0])
      .end((err, res) => {
        const traveldetails = res.body;
        expect(traveldetails.id).to.be.a('string');
        expect(traveldetails.budget).to.equal(travel[0].budget);
        expect(traveldetails.country).to.equal(travel[0].country);
        expect(traveldetails.hotelCost).to.equal(travel[0].hotelCost);
        expect(traveldetails.travelCost).to.equal(travel[0].travelCost);
        expect(traveldetails.extra).to.equal(travel[0].extra);
        expect(traveldetails.foodCost).to.equal(travel[0].foodCost);
        expect(traveldetails.transportation).to.equal(travel[0].transportation);
        done();
      });
  });
});

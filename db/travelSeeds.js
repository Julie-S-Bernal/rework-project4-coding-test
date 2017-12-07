const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Travel     = require('../models/travel');

const travelData = [{


  budget: '4000',
  startTravelDate: '24-12-2017',
  endTravelDate: '06-01-2017',
  travelDuration: '14',
  country: 'Spain',
  currency: 'EUR',
  hotelCost: '800',
  foodCost: '500',
  extra: '500',
  travelCost: '1200',
  transportation: '100'

}];
mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Travel.create(travelData))
  .then(travels => console.log(`${travels.length} travel created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

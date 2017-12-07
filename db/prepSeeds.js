// // const mongoose = require('mongoose');
// mongoose .Promise = require('bluebird');
//
// const {dbURI} = require('../config/environment');
// const Preparation = require('../models/preparation');
//
// const PrepData =[{
//   curentMoney: '1000',
//   targetMoney: '2000',
//   startTravelDate: '',
//   LivingExpense: '',
//   hotelCost: '600',
//   planeCost: '500'
//
// }];
//
// mongoose
//   .connect(dbURI, { useMongoClient: true })
//   .then(db => db.dropDatabase())
//   .then(()=> Preparation.create(PrepData))
//   .then(preparations =>console.log(`${preparations.length} Travel budget preparation created!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());

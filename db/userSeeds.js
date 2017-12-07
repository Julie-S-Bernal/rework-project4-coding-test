const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const User     = require('../models/user');

const userData = [{

  name: 'Sheldon',
  surname: 'Cooper',
  email: 'cooper@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  homeCountry: 'United States',
  homeCurrency: 'USD',
  salary: '107794',
  monthlySalary: '8982',
  livingExpensesYear: '60000',
  livingExpensesMonth: '5000'

}];
mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} user created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

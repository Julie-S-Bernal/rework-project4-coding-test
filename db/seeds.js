const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Travel    = require('../models/travel');
const User      = require('../models/user');
const Image     = require('../models/image');

const userData = [{
  name: 'Sheldon',
  lastName: 'Cooper',
  email: 'cooper@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  homeCountry: 'United States',
  homeCurrency: 'USD',
  salary: '107794',
  monthlySalary: '8982',
  livingExpensesYear: '60000',
  livingExpensesMonth: '5000',
  currentToken: null
}];

// const imageData = [{
//   image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
// }];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => {
    console.log(`${users.length} users created!`);

    return Travel.create([{
      budget: '4000',
      startTravelDate: '2017-24-12',
      endTravelDate: '2018-01-06',
      travelDuration: '14',
      country: {
        name: 'Spain',
        image: 'http://www.globalblue.com/tax-free-shopping/spain/article641258.ece/alternates/LANDSCAPE2_970/Nativity-facade-of-Sagrada-Familia-cathedral-in-Barcelona-spain.jpg'
      },
      currency: 'EUR',
      hotelCost: '800',
      foodCost: '500',
      extra: '500',
      travelCost: '1200',
      transportation: '100',
      createdBy: users[0]
    }]);
  })
  .then(travels => console.log(`${travels.length} travel created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

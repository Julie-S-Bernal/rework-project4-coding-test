const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Travel     = require('../models/travel');
const User     = require('../models/user');
const Image    = require('../models/image');

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
  transportation: '100',
  createdBy: 'Sheldon Cooper'

}];

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

const imageData = [{

  image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb'
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Travel.create(travelData))
  .then(travels => console.log(`${travels.length} travel created!`))
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} users created!`))
  .then(() => Image.create(imageData))
  .then(images => console.log(`${images.length} images created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());

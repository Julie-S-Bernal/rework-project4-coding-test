const mongoose = require('mongoose');
//change to camelcase

const travelSchema = mongoose.Schema({
  budget: { type: Number, required: true },
  startTravelDate: { type: String},
  endTravelDate: { type: String},
  country: { type: String, required: true },
  currency: { type: String, required: true},
  hotelCost: { type: Number },
  foodCost: { type: Number},
  extra: { type: Number},
  travelCost: {type: Number},
  transportation: { type: Number},
  createdBy: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('travel', travelSchema);

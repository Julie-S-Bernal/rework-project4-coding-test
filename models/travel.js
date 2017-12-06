const mongoose = require('mongoose');
//change to camelcase

const travelSchema = mongoose.Schema({
  budget: { type: Number, required: true },
  startTravelDate: { type: Date},
  endTravelDate: { type: Date},
  country: { type: String, required: true },
  hotelCost: { type: Number },
  foodCost: { type: Number},
  extra: { type: Number},
  travelCost: {type: Number},
  transportation: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('travel', travelSchema);

const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
  budget: { type: Number, required: true },
  startTravelDate: { type: String},
  endTravelDate: { type: String},
  country: { type: String, required: true },
  currency: { type: String, required: true},
  hotelCost: { type: Number },
  foodCost: { type: Number},
  foodCostValues: {type: Array, 'default': []},
  extra: { type: Number},
  extraCostValues: {type: Array, 'default': []},
  travelCost: {type: Number},
  transportation: { type: Number},
  transportationCostValues: {type: Array, 'default': []},
  createdBy: {type: String}
}, {
  timestamps: true
});

travelSchema.pre('save', function(next) {
  this.foodCostValues.push(this.foodCost);
  this.extraCostValues.push(this.extra);
  this.transportationCostValues.push(this.transportation);
  next();
});

module.exports = mongoose.model('Travel', travelSchema);

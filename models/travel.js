const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
  Money_you_want_to_spend: { type: Number, required: true },
  maximum_amount: { type: Number},
  country: { type: String, required: true },
  allowance_per_hotels: { type: Number },
  allowance_for_food: { type: Number},
  extra: { type: Number},
  travel_fare: {type: Number},
  transportation: { type: Number, required: true},
  extra_money_for_set_week: { type: Number}

});

module.exports = mongoose.model('travel', travelSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Name: { type: String, trim: true, required: true },
  Surname: { type: String, trim: true, required: true },
  Email: { type: String, trim: true, required: true },
  Street_number: { type: Number, required: true },
  Address: { type: String, trim: true, required: true },
  Country_of_Residence: { type: Number, required: true },
  PhoneNumber: { type: Boolean, required: true },
  Default_currency: { type: Number, required: true }

}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

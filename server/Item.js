const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  expiryDate: Date,
  maxDiscount: Number
});

module.exports = mongoose.model('Item', ItemSchema);
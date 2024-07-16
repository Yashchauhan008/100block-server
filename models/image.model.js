const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  block_no: Number,
  created_at: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;

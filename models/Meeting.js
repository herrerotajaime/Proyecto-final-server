const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
  user1: String,
  user2: String,
  picurl1: String,
  picurl2: String,
  description: String,
  date: String,


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Meeting = mongoose.model('Meeting', userSchema);
module.exports = Meeting;

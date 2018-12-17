const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  name: String,
  lat: Number,
  lng: Number,
  users: String,


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Meeting = mongoose.model('Meeting', userSchema);
module.exports = Meeting;

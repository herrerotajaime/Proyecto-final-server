const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  city: String,
  name: String,
  surname: String,
  pictureUrl: String,
  age: Number,
  gender:"",
  description: String,
  idiom1: String,
  idiom2: String,


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

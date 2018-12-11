const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//hola

const userSchema = new Schema({
  username: String,
  password: String,
  pictureUrl: String,
  name: String,
  surname: String,
  age: Number,
  gender:"",
  description: String,
  latitude: Number,
  longitude: Number,

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;

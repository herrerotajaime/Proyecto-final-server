// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Meeting = require("../models/Meeting");

const bcryptSalt = 10;

const randomInt = (min, max) => Math.random() * (max - min + 1) + min

let maxLatitude = 40.490838
let maxLongitude = -3.859387
let minLatitude = 40.256484
let minLongitude = -3.562756

const markers = []

for (let i = 0; i <= 100; i++) {
  markers.push({
    name: 'marker' + i,
      lat: randomInt(minLatitude, maxLatitude),
      lng: randomInt(minLongitude, maxLongitude)
  })
}

mongoose.connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  console.log(markers)
Meeting.deleteMany()
.then(() => Meeting.insertMany(markers))
.then(MeetingCreated => {
  console.log(`${MeetingCreated.length} meetings created with the following id:`);
  console.log(MeetingCreated.map(u => u._id))
})                                                                                                                            
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Meeting = require("../models/Meeting");

const bcryptSalt = 10;

function randomInt(min,max) {
    return (Math.random()*  ( max - min ) + min );
}

let maxLatitude = 40.482883365367314
let minLatitude = 40.30193738139974
let maxLongitude = -3.5474274657020715
let minLongitude = -3.8756440184364465

const markers = []

for (let i = 0; i <= 50; i++) {
  markers.push({
    name: 'marker' + i,
      lat: randomInt(minLatitude, maxLatitude),
      lng: randomInt(minLongitude, maxLongitude)
  })
}

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
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
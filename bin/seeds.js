require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);

mongoose
  .connect(process.env.DBURL, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: `Arturo`,
    password: bcrypt.hashSync(`1`, salt),
    name: `Arturo`,
    surname: `Perez Reverte`,
    latitude: 40.39224670000001,
    longitude:-3.6986323,
    description: ``,
    gender: `1`,
    
  },
  {
    username: `Joaquin`,
    password: bcrypt.hashSync(`1`, salt),
    pictureUrl:"",
    name: `Joaquin`,
    surname: `Sabina`,
    latitude: 40.39224670000001,
    longitude:-3.6986339,
    description: ``,
    gender: `1`,
   
  },
]

users.create  () 
.then(() => {
  return users.create(users)
})

.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
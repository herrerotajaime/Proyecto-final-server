// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "Javi",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Javi",
    surname: "Lopez",
    description:"Soy un chico asiatico interesado en aprender Español, mi afición es comer arroz",
    idiom1: "Coreano",
    idiom2: "Español",
    city: "miau",
    pictureUrl:"",
    email: "javi@gmail.com",
   
  
  },
  {
    username: "blanca",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    email: "blanca@gmail.com",
    address: "miau"
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})                                                                                                                            
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Meeting = require("../models/Meeting");

const bcryptSalt = 10;

let markers= [
{
  name: "Intercambio de Español y Coreano",
  lat: 40.398333,
  lng: -3.695452,
  user1: "Javi Lopez",
  user2: "Carlos Perez",
  picurl1: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/south-korea.svg",
  picurl2: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301985/Banderas/spain.svg",
  description: "Al menos dos horas de conversación. Apuntaos!",
  date: "Viernes 21 a las 18:30"
},
{
  name: "Intercambio de Español y Frances",
  lat: 40.411143,
  lng: -3.699743,
  user1: "Pedro Ambel",
  user2: "Samuel Herce",
  picurl1: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/france.svg",
  picurl2: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301985/Banderas/spain.svg",
  description: "Intercambio de español y francés.",
  date: "Sabado 22 a las 18:30"
},
{
  name: "Intercambio de Español e Italiano",
  lat: 40.417416,
  lng: -3.692705,
  user1: "Lucia Durban",
  user2: "Guille Fernandez",
  picurl1: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/italy.svg",
  picurl2: "https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301985/Banderas/spain.svg",
  description: "Intercambio de italiano y francés.",
  date: "Domingo 23 a las 18:30"
}
]

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
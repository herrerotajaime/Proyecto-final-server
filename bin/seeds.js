// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const bcryptSalt = 10;


let users = [
  {
    username: "Javi",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Javi",
    surname: "Lopez",
    description:"Soy un chico asiatico interesado en aprender Español, mi afición es comer arroz y conducir narco lanchas",
    idiom1: "Coreano",
    idiom2: "Español",
    city: "Madrid",
    pictureUrl:"https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545309789/Banderas/javi_corea.jpg",
    email: "javi@gmail.com",
  },
  {
    username: "Ana",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Ana",
    surname: "Fernandez",
    description:"Apasionada de la pintura y el arte, me encata escribir y viajar",
    idiom1: "Francés",
    idiom2: "Español",
    city: "Madrid",
    pictureUrl:"https://img.europapress.es/fotoweb/fotonoticia_20170522082933_640.jpg",
    email: "ana@gmail.com",
  },
  {
    username: "Lucia",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Lucia",
    surname: "Durban",
    description:"Me encanta aprender nuevos idiomas y viajar, tengo un blog en el que cuento todo sobre mis viajes",
    idiom1: "Italiano",
    idiom2: "Español",
    city: "Madrid",
    pictureUrl:"http://www.felixtoran.es/wp-content/uploads/2016/04/seguro_anulacion_viaje_vuelo_erv.jpg",
    email: "lucia@gmail.com",
  },
  {
    username: "Fede",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Fede",
    surname: "Andreu",
    description:"Soy ingeniero y ecologista, trabajo para construir un mundo mas sostenible.",
    idiom1: "Aleman",
    idiom2: "Español",
    city: "Madrid",
    pictureUrl:"https://st3.depositphotos.com/4421371/13111/i/1600/depositphotos_131114550-stock-photo-ecologist-holding-leaves.jpg",
    email: "fede@gmail.com",
  },
  {
    username: "Ignacio",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Ignacio",
    surname: "Martin",
    description:"Me dedico a la reinsercion de animales, además tengo una protectora. ",
    idiom1: "Español",
    idiom2: "Frances",
    city: "Madrid",
    pictureUrl:"http://comunicacion.volkswagen.es/thumbnail.html?annex=17275&max_width=360&qual=0",
    email: "fede@gmail.com",
  },
  {
    username: "Guille",
    password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
    name: "Guille",
    surname: "Fernandez",
    description:"Me encanta la ópera y la filosofia, ahora mismo estoy aprendiendo italiano!!",
    idiom1: "Español",
    idiom2: "Italiano",
    city: "Madrid",
    pictureUrl:"http://s3.amazonaws.com/futmadrid/noticias/953/big_list/guillefernandezlasrozas1314.jpg?1379022438",
    email: "guille@gmail.com",
  },
  // {
  //   username: "Samuel",
  //   password: bcrypt.hashSync("a", bcrypt.genSaltSync(bcryptSalt)),
  //   name: "Samuel",
  //   surname: "Herce",
  //   description:"Jugador de ajedrez y adicto a la lectura, en mis ratos libres me dedico a la mecánica",
  //   idiom1: "Español",
  //   idiom2: "Italiano",
  //   city: "Madrid",
  //   pictureUrl:"https://www.thinkingheads.com/wp-content/uploads/2017/11/45.jpg",
  //   email: "samuel@gmail.com",
  // },
]

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  console.log(users)
User.deleteMany()
.then(() => User.insertMany(users))
.then(UserCreated => {
  console.log(`${UserCreated.length} meetings created with the following id:`);
  console.log(UserCreated.map(u => u._id))
})                                                                                                                            
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
const express = require('express');
const router  = express.Router();


const Meeting = require('../models/Meeting')
const Users = require("../models/User")


/* GET home page */
router.get('/', (req, res, next) => {

});

router.get(`/meeting`, (req, res, next) => {
  Meeting.find({}, function (err, docs) {
    res.json(docs)
  })

})
router.get(`/Users`, (req, res, next) => {
  User.find({}, function (err, docs) {
    res.json(docs)
  })
})


router.use('/api/auth', require('./auth'));

module.exports = router;

var express = require('express');
var router = express.Router();
var models = require('./../models');
var User = models.User;
var sequelize = models.sequelize;

router.get('/', (req, res) => {
  User.findAll({

  }).then(users => {
    res.render('users', {users})
  });
})

module.exports = router;
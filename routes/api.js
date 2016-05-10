var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')["development"]);


/* GET home page. */
router.get('/pirates', function(req, res, next) {
  knex('pirate_table').then(function (data){
    res.json(data);
  })
});

module.exports = router;

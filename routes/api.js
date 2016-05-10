var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')["development"]);


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('pirate_table').then(function (data){
    res.json(data);
  })
});

router.post('/add', function(req, res, next){
  knex('pirate_table')
  .insert(req.body)
  .returning("*")
  .then(function(newPirate){
    res.json(newPirate);
  })
})

module.exports = router;

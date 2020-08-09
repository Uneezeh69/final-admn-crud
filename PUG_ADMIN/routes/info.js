var express = require('express');
var router = express.Router();
var Info = require("../models/info");
/* GET home page. */
router.get('/', async function(req, res, next) {
  let info = await Info.find();
  console.log(info);
  res.render('custInfo/info', {info});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Product = require("../models/products");
/* GET home page. */
router.get('/', async function(req, res, next) {
  let products = await Product.find();
  console.log(products);
  res.render('products/list', {products});
});

module.exports = router;

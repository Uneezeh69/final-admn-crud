var express = require('express');
var router = express.Router();
var Product = require("../models/products");
const checkSessionAuth = require('../middlewares/checkSessionAuth');
/* GET home page. */
router.get('/', async function(req, res, next) {
  let products = await Product.find();
  //console.log(products);
  res.render('products/list', {products});
});

router.get('/add', checkSessionAuth, async function(req, res, next) {
  
  res.render('products/add');
});

router.post('/add', async function(req, res, next) {
  let product = new Product(req.body);
  await product.save();
  res.redirect('/products');
});

router.get('/delete/:id', async function(req, res, next) {
  let product = await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});

router.get('/update/:id', async function(req, res, next) {
  let product = await Product.findById(req.params.id);
  res.render("products/update", {product});
});

router.post('/update/:id', async function(req, res, next) {
  let product = await Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  product.quantity = req.body.quantity;
  await product.save();
  res.redirect("/products");
});

module.exports = router;

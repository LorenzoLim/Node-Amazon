const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const api = require('./routes/api');
let Product = require('./models/product');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', api);

app.get('/students', function (req, res) {
  Product.find().then((products) => {
    res.render('products', {products: products});
  })
});

app.post('/products', function (req, res) {
  let product_name = req.body.product_name;
  Product.create({name: product_name}).then(() =>{
    res.redirect('/products');
  })
});

app.listen(port)

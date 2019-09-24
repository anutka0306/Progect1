const express = require('express');
const fs = require('fs');
const path = require('path');
const cartRouter = require('./cartRouter');
const app = express();
app.set('views', path.join(__dirname, '../public', 'views'));
app.set('view-engine', 'ejs');


app.use(express.json());
app.use('/', express.static('./public'));
app.use(express.static('public'));
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
  fs.readFile('./server/db/products.json', 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({result: 0, text: err}));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.send(data);
    }
  });
});

app.get('/catalog', (req, res) => {
res.sendFile(path.join(__dirname, '../public', 'catalog.html'));

});

app.get('/product/:id', (req, res) =>{
  //res.send("Id is - " + req.params.id);
  res.render('product.ejs', {prodId: req.params.id});
});

app.get('/cart', (req, res) => {
res.sendFile(path.join(__dirname, '../public', 'cart.html'));
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

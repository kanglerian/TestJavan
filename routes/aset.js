let express = require('express');
let router = express.Router();
let axios = require('axios');

router.get('/', async (req, res) => {
  await axios.get('https://dummyjson.com/products')
  .then((response) => {
    const data = response.data.products;
    res.render('assets/index',{
      title: 'TesJavan - Aset',
      products: data
    })
  }).catch((error) => {
    res.send(error);
  });
});

module.exports = router;

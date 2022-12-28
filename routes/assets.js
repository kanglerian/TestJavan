let express = require('express');
let router = express.Router();
let axios = require('axios');

const { Family, Asset } = require('../models');

router.get('/', async (req, res) => {
  const assets = await Asset.findAll({
    include: [
      { model: Family, as: 'Family' }
    ],
  });
  const keluarga = await Family.findAll();
  await axios.get('https://dummyjson.com/products')
  .then((response) => {
    const products = response.data.products;
    res.render('assets/index',{
      title: 'TestJavan - Assets',
      products: products,
      assets: assets,
      families: keluarga
    });
  }).catch((error) => {
    res.send(error);
  });
});

module.exports = router;

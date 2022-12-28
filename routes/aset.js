let express = require('express');
let router = express.Router();
let axios = require('axios');

const { Keluarga, Aset } = require('../models');

router.get('/', async (req, res) => {
  const data = await Aset.findAll({
    include: [
      { model: Keluarga, as: 'User' }
    ],
  });
  const keluarga = await Keluarga.findAll();
  await axios.get('https://dummyjson.com/products')
  .then((response) => {
    const products = response.data.products;
    res.render('assets/index',{
      title: 'TesJavan - Aset',
      families: data,
      products: products,
      data: data,
      keluarga: keluarga
    });
  }).catch((error) => {
    res.send(error);
  });
});

module.exports = router;

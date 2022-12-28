let express = require('express');
let router = express.Router();
let axios = require('axios');

const { Keluarga, Aset } = require('../models');

/* GET users listing. */
router.get('/', async(req, res) => {
  const data = await Keluarga.findAll({
    where: {
      idParent: null
    }
  });
  res.render('users/index',{
    title: 'TesJavan - Keluarga',
    families: data,
    url: req.originalUrl
  });
});

/* GET users listing. */
router.get('/:id', async(req, res) => {
  const data = await Keluarga.findAll({
    where: {
      idParent: req.params.id
    }
  });
  const asets = await Aset.findAll({
    where: {
      idUser: req.params.id
    }
  });
  const nama = await Keluarga.findOne({
    where: {
      id: req.params.id
    }
  });
  await axios.get('https://dummyjson.com/products')
  .then((response) => {
    const products = response.data.products;
    res.render('users/detail',{
      title: 'TesJavan - Keluarga',
      families: data,
      products: products,
      asets: asets,
      url: req.originalUrl,
      user: req.params.id,
      nama: nama,
    });
  }).catch((error) => {
    res.send(error);
  });
});

router.post('/aset', async(req, res) => {
  try {
    await Aset.create(req.body);
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.post('/keluarga', async(req, res) => {
  try {
    await Keluarga.create(req.body);
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.patch('/:id', async(req, res) => {
  try {
    await Keluarga.update(req.body,{
      where:{
        id: req.params.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id', async(req, res) => {
  try {
    await Keluarga.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.delete('/aset/:id', async(req, res) => {
  try {
    await Aset.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

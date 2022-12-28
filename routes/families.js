let express = require('express');
let router = express.Router();
let axios = require('axios');

const { Family, Asset } = require('../models');

/* GET users listing. */
router.get('/', async(req, res) => {
  const data = await Family.findAll({
    where: {
      idParent: null
    }
  });
  res.render('users/index',{
    title: 'TestJavan - Families',
    families: data,
    url: req.originalUrl
  });
});

/* GET users listing. */
router.get('/:id', async(req, res) => {
  const families = await Family.findAll({
    where: {
      idParent: req.params.id
    }
  });
  const assets = await Asset.findAll({
    where: {
      idUser: req.params.id
    }
  });
  const parent = await Family.findOne({
    where: {
      id: req.params.id
    }
  });
  await axios.get('https://dummyjson.com/products')
  .then((response) => {
    const products = response.data.products;
    res.render('users/detail',{
      title: 'TestJavan - Families',
      families: families,
      products: products,
      assets: assets,
      url: req.originalUrl,
      user: req.params.id,
      parent: parent,
    });
  }).catch((error) => {
    res.send(error);
  });
});

router.post('/asset', async(req, res) => {
  try {
    await Asset.create(req.body);
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.post('/family', async(req, res) => {
  try {
    await Family.create(req.body);
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.patch('/asset/:id', async(req, res) => {
  try {
    await Asset.update(req.body,{
      where:{
        id: req.params.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.patch('/:id', async(req, res) => {
  try {
    await Family.update(req.body,{
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
    await Family.destroy({
      where: {
        id: req.params.id
      }
    });
    res.redirect('back');
  } catch (error) {
    res.send(error);
  }
});

router.delete('/asset/:id', async(req, res) => {
  try {
    await Asset.destroy({
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

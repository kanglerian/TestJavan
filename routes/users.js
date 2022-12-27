let express = require('express');
let router = express.Router();

const { Keluarga } = require('../models');

/* GET users listing. */
router.get('/', async(req, res) => {
  const data = await Keluarga.findAll({
    where: {
      idParent: null
    }
  });
  res.render('users/index',{
    title: 'TesJavan - Keluarga',
    families: data
  });
});

/* GET users listing. */
router.get('/:id', async(req, res) => {
  const data = await Keluarga.findAll({
    where: {
      idParent: req.params.id
    }
  });
  res.render('users/index',{
    title: 'TesJavan - Keluarga',
    families: data
  });
});

module.exports = router;

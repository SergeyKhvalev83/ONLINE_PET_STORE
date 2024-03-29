const express = require('express');
const router = express.Router();
const NewProdPage = require('../../components/pages/AddProductPage');
const EditProductPage = require('../../components/pages/EditProductPage');
const db = require('../../db/models');

//! add new product page render
router.get('/add-form', (req, res) => {
  const user = res.locals?.user;
  if (user) {
    res.renderComponent(NewProdPage, { user });
  } else {
    res.json({ message: 'PLEASE PASS AUTHORIZATION' });
  }
});

//!edit product page render

router.get('/:id/edit-form', async (req, res) => {
  try {
    const user = res.locals?.user;
    if (user) {
      const { id } = req.params;
      const prod = await db.Product.findByPk(Number(id));
      const parsedProd = JSON.parse(JSON.stringify(prod));
      console.log('Prod', prod);

      res.renderComponent(EditProductPage, {
        product: parsedProd,
        user: res.locals?.user,
      });
    } else {
      res.json({ message: 'PLEASE PASS AUTHORIZATION' });
    }
  } catch (error) {
    console.log('ERROR TO RENDER PRODUCT PAGE BACK: ', error);
  }
});

module.exports = router;

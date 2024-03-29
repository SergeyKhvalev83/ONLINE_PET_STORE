const express = require('express');
const router = express.Router();
const Product = require('../../components/Product')
const db = require('../../db/models')

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    console.log("PARAMS!!: ", id)
    const currentUser = res.locals.user;

    const prod = await db.Product.findByPk(Number(id));
    const parsedProd = JSON.parse(JSON.stringify(prod));
    console.log("Prod!!!!!!!!!!!!", parsedProd)

    res.renderComponent(Product, {
      product: parsedProd,
      user: currentUser, 
    });
  } catch (error) {
    console.log('ERROR PULL RELEVANT PRODUCT IN DB: ', error);
  }
});

module.exports = router;

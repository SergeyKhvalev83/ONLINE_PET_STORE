const express = require('express');
const router = express.Router();
const Cart = require('../../components/pages/CartPage');
const db = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log('sadasdasas', user_id);

    const curCart = await db.Cart.findAll({
      where: { user_id },
    });
    const parsedCurCart = JSON.parse(JSON.stringify(curCart));
    console.log('CART CONTENT', parsedCurCart);

    if (parsedCurCart.length === 0) {
      res.status(404).json({ message: 'OK' });
    } else {
      for (let each of parsedCurCart) {
        const product = await db.Product.findByPk(each.prod_id);
        if (product) {
          await db.Product.update(
            { quantity: product.quantity - 1 },
            { where: { id: each.prod_id } }
          );
        }
      }
      const addToCart = await db.Cart.destroy({
        where: {
          user_id,
          // prod_id,
        },
      });
      res.status(200).json({ message: 'OK' });
    }
  } catch (error) {
    console.log('ERROR UPDATE DB BACK: ', error);
  }
});

module.exports = router;

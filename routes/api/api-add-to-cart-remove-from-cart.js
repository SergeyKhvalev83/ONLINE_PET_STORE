const express = require('express');
const router = express.Router();
const db = require('../../db/models');

//! add product to the cart

router.post('/addcart', async (req, res) => {
  try {
    const { user_id, prod_id } = req.body;

    const currentUser = res.locals.user;
    if (currentUser !== null) {
      const addToCart = await db.Cart.create({
        user_id,
        prod_id,
      });
      res.status(201).json({message: "OK"})
    } else{
      res.status(404).json({message: "PLEASE LOGIN"})
    }
  } catch (error) {
    console.log('ERROR TO ADD PRODUCT TO CART BACK: ', error);
  }
});




//! remove certain product from cart 
router.post('/remove-item-cart', async (req, res) => {
  try {
    const { user_id, prod_id } = req.body;
    // console.log("TO REMOOOOOOVE: ",user_id, prod_id)
    const addToCart = await db.Cart.destroy({
      where: {
        user_id,
        prod_id,
      },
      limit: 1 
    });
    res.status(201).json({ message: 'OK' });
  } catch (error) {
    console.log('ERROR TO REMOVE ITEM FROM CARD AND CART DB: ', error);
  }
});








module.exports = router;

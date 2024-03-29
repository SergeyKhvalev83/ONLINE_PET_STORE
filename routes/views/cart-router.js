const express = require('express');
const router = express.Router();
const Cart = require('../../components/pages/CartPage');
const db = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const currentUser = res.locals.user;
    // console.log("USER SESSION!!!!!!: ", currentUser)
    if (currentUser !== null) {
        const allProducts = await db.Product.findAll();
      const parsedAllProducts = JSON.parse(JSON.stringify(allProducts));

      const curCart = await db.Cart.findAll({
        where: { user_id: currentUser.id },
      });
      const parsedCurCart = JSON.parse(JSON.stringify(curCart));

      const currCartProducts = [];

      for (let i = 0; i < parsedCurCart.length; i++) {
        for (let j = 0; j < parsedAllProducts.length; j++) {
          if (parsedCurCart[i].prod_id === parsedAllProducts[j].id)
            currCartProducts.push(parsedAllProducts[j]);
        }
      }
      console.log(currCartProducts);
      //to combine duplicated items
      const arrOfCartDuplicates = [];
      for (let a = 0; a < currCartProducts.length; a++) {
        let count = 1;
        for (let b = a + 1; b < currCartProducts.length; b++) {
          if (currCartProducts[a].id === currCartProducts[b].id) {
            count++;
          }
        }
        if (
          arrOfCartDuplicates.find(
            (eachProd) => eachProd.id === currCartProducts[a].id
          )
        ) {
          continue;
        } else {
          arrOfCartDuplicates.push({
            ...currCartProducts[a],
            quantityInCart: count,
          });
        }
      }

      console.log('DUPLICATES: ', arrOfCartDuplicates);

      let totalCartPrice = arrOfCartDuplicates.reduce((acc, each)=> acc+ (each.quantityInCart*each.price), 0)
      



      res.renderComponent(Cart, {
        myProducts: arrOfCartDuplicates,
        user: currentUser,
        totalCartPrice
      });
    } else {
      res.status(400).json({ messge: 'PLEASE LOGIN TO CONTINUE CHECKOUT' });
    }
  } catch (error) {
    console.log(
      'ERROR WITH PULLING DATA FROM PRODUCT TABLE TO CART BACK: ',
      error
    );
  }
});

module.exports = router;

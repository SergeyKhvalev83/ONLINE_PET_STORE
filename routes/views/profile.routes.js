const express = require('express');
const router = express.Router();
const Profile = require('../../components/pages/ProfilePage');
const db = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const user = res.locals?.user;
    if (user) {
      const products = await db.Product.findAll({
        where: { owner_id: user.id },
      });
      res.renderComponent(Profile, { products, user });
    } else{
      res.json({message:"PLEASE PASS AUTHORIZATION"})
    }
  } catch (error) {
    console.log(
      'ERROR TO FORM PROFILE AND DELIVER ALL USER`s PRODUCT FROM DB BACK: ',
      error
    );
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const MainPage = require('../../components/pages/MainPage');
const db = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const allProd = await db.Product.findAll();
    const parsedAllProd = JSON.parse(JSON.stringify(allProd));

    res.renderComponent(MainPage, {
      catalog: parsedAllProd,
      user: res.locals?.user,
    });
  } catch (error) {
    console.log('GET ALL PRODACT ERROR BACK: ', error);
  }
});

module.exports = router;

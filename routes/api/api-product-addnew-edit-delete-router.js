const express = require('express');
const router = express.Router();
const db = require('../../db/models');

//! add new product

router.post('/add', async (req, res) => {
  try {
    const { title, type, price, quantity, owner_id, url } = req.body;

    const adNewProd = await db.Product.create({
      title,
      type,
      price,
      quantity,
      owner_id,
      url,
    });
    res.status(203).json({ message: 'OK' });
  } catch (error) {
    console.log('ERROR TO ADD NEW PROD TO DB BACK: ', error);
  }
});


//! edit product
router.put('/edit/:id', async (req, res) => {
  try {
    const { body } = req; // we need this to find product in db and info to update
    // console.log("BODY!!!!!!!!!!!!!!!!!!!!!!!: ", body)

    const { params } = req;// we need this to find product in db
    const id_user_session = req.session.user_sid;// we need it to defin id of current loged in user

    const prodToEdit = await db.Product.findByPk(params.id);
    console.log("BODY!!!!!!!!!!!!!!!!!!!!!!!: ", body)
    console.log("PARAMS: ", params)
    console.log("USER ID SESSION: ", id_user_session)
    console.log(JSON.parse(JSON.stringify(prodToEdit)))

    if (id_user_session === prodToEdit.owner_id) { // if current user session id === product owner_id => we eligable to update product info
      const update = await db.Product.update(body, {where:{id: params.id }})
      res.status(200).json({message: "updated"})
    } else {
      res.status(403).json({message: "forbidden"})

    }
  } catch (error) {
    console.log('ERROR EDIT PRODUCT BACK :', error);
  }
});



//! delete product 

router.delete('/delete/:id', async (req, res) => {
  try {
    const { body } = req; // we need this to find product in db and info to update
    const { params } = req;// we need this to find product in db
    const id_user_session = req.session.user_sid;// we need it to defin id of current loged in user

    const prodToDelete = await db.Product.findByPk(params.id);
    console.log("BOD!Y: ", body, "IDSESSION: ", id_user_session)

    console.log("PARAM!S!!!!!!!!: ", params.id)
    console.log("USER !!ID SESSION: ", id_user_session)
    console.log(JSON.parse(JSON.stringify(prodToDelete)))

    if (id_user_session === prodToDelete.owner_id) { // if current user session id === product owner_id => we eligable to update product info
      const deleteProd = await db.Product.destroy({where:{id: params.id }})
      res.status(200).json({message: "DELETED"})
    } else {
      res.status(403).json({message: "forbidden"})

    }
  } catch (error) {
    console.log('ERROR EDIT PRODUCT BACK :', error);
  }
});


module.exports = router;

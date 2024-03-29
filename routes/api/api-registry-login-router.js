const express = require('express');
const router = express.Router();
const db = require('../../db/models');
const bcrypt = require('bcrypt')



router.post('/registry', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isRegistred = await db.User.findOne({ where: { email } });
    if (!isRegistred) {
      const hashedPass = await bcrypt.hash(password, 10);

      const newRegisty = await db.User.create({
        username,
        email,
        password: hashedPass,
      });
      //to create session and relevant tocken
      req.session.user_sid = newRegisty.id
      res.status(203).json({message: "OK"})
    } else{
      res.status(403).json({ message: 'ALREADY REGISTRED' });

    }
  } catch (error) {
    console.log('SOMTHING WRONG WITH REGISTRATION BACK: ', error);
  }
});


// login 
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("DASDADAD: ", email, password)

    const isRegistred = await db.User.findOne({ where: { email } });

    const isPasswordMatch = await bcrypt.compare(password, isRegistred?.password)
    console.log("HASHHH: ", isPasswordMatch) 

    if (isRegistred && isPasswordMatch) {
      //to create session and relevant tocken
      req.session.user_sid = isRegistred.id 
      res.status(200).json({message: "OK"})
    } else {
      res.status(404).json({ message: 'USER NOT FOUND' });

    }
  } catch (error) {
    console.log('SOMTHING WRONG WITH LOGIN BACK: ', error);
  }
}); 



// logout
router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'ERROR LOGOUT USER' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router
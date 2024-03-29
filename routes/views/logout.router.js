const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'ERROR LOGOUT USER' });
    }
    res.clearCookie('user_sid').redirect('/');
  });
});

module.exports = router
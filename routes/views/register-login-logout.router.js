const express = require('express');
const router = express.Router();
const RegisteryPage = require('../../components/pages/RegistryPage');
const LoginPage = require('../../components/pages/LoginPage');


router.get("/register", (req, res)=>{
  res.renderComponent(RegisteryPage, {user:res.locals?.user})

})


router.get('/login', (req, res) => {
  const user = res.locals;
  res.renderComponent(LoginPage, { user: res.locals?.user });
});

module.exports = router;






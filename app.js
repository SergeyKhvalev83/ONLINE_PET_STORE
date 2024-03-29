require('@babel/register');
const express = require('express');
const serverConfig = require('./serverConfig/serverConfig');

// const { sequelize } = require('./db/models');
const PORT = 3000;
const app = express();
//all main middlewares
serverConfig(app);

// routers imports
const mainPageRender = require('./routes/views/main-page.router');
const registLoginLogoutPagesRender = require('./routes/views/register-login-logout.router');
const apiRegistrLogin = require('./routes/api/api-registry-login-router');
const logout = require('./routes/views/logout.router');
const productPageRender = require('./routes/views/product.router');
const profilePageRender = require('./routes/views/profile.routes')
const addEditProductPageRender = require('./routes/views/add-edit-delete-product-page-routes')
const apiProductAddEditDelete = require('./routes/api/api-product-addnew-edit-delete-router')
const cartPageRender = require('./routes/views/cart-router')
const apiAddToCartRemove = require('./routes/api/api-add-to-cart-remove-from-cart')
const apiCheckout = require('./routes/api/api-checkout')


app.use('/', mainPageRender);
app.use('/', registLoginLogoutPagesRender);
app.use('/api', apiRegistrLogin);
app.use('/', logout);
app.use('/product-page', productPageRender);
app.use('/profile', profilePageRender);
app.use('/product', addEditProductPageRender)
app.use('/cart', cartPageRender)
app.use('/api-product/actions', apiProductAddEditDelete)
app.use('/api-cart-product', apiAddToCartRemove)
app.use('/api/checkout', apiCheckout)


// sequelize.authenticate();
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

const React = require('react');
const Layout = require('../Layout');
const ProductCatalog = require('../ProductCatalog');

module.exports = function MainPage({ catalog, user }) {
  return (
    <Layout user={user}>
      <div >
        <div id="small-main-page-container">
          <h1> WElCOME TO THE ONLINE PET SHOP</h1>
        </div>
        <ProductCatalog catalog={catalog} user={user} />
      </div>
    </Layout>
  );
};

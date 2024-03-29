const React = require('react');
const Layout = require('./Layout');

module.exports = function ProductCatalog({ catalog, user }) {
  return (
    <ul>
      {catalog &&
        catalog.map((eachProd) => (
          <li>
            <div user={user} key={eachProd.id} eachProd={eachProd}>
              Product: {eachProd.title}, type: {eachProd.type}, price: $
              {eachProd.price}
              <a className="product-info" style={{ marginLeft: '8px' }} href={`/product-page/${eachProd.id}`}>
                Product info
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
};

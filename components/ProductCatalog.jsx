const React = require('react');
const Layout = require('./Layout');

module.exports = function ProductCatalog({ catalog, user }) {
  return (
    <section id="main-container" className="py-5 text-center container">
      {user
        ? catalog.map((eachProd) => (
            <div className="each-card-main-page">
              <div
                className="card col"
                style={{ width: '21rem' }}
                key={eachProd.id}
              >
                <img src={eachProd.url} className="card-img-top" alt="pic" />
                <div className="card-body ">
                  <h5 className="card-title">Pet: {eachProd.title}</h5>
                  <h5 className="card-title">Breed: {eachProd.type}</h5>
                  <h5 className="card-title">Price: {eachProd.price}</h5>
                  <h5 className="card-title">Quantity: {eachProd.quantity}</h5>

                 
                  <input
                    data-prodid={eachProd.id}
                    data-userid={user.id}
                    className="add-to-cart-btn"
                    type="button"
                    value="Add to cart"
                  />
                   <a className="product-info" style={{ marginLeft: '8px' }} href={`/product-page/${eachProd.id}`}>
                Product info
              </a>
                </div>
              </div>
            </div>
          ))
        : catalog.map((eachProd) => (
            <div className="each-card-main-page" style={{ width: '21rem' }} key={eachProd.id}>
              <img src={eachProd.url} className="card-img-top" alt="pic" />
              <div className="card-body">
                <h5 className="card-title">Pet: {eachProd.title}</h5>
                <h5 className="card-title">Breed: {eachProd.type}</h5>
                <h5 className="card-title">Price: {eachProd.price}</h5>
                <h5 className="card-title">Quantity: {eachProd.quantity}</h5>
                <a className="product-info" style={{ marginLeft: '8px' }} href={`/product-page/${eachProd.id}`}>
                Product info
              </a>
                
              </div>
            </div>
          ))}
    </section>
  );
};

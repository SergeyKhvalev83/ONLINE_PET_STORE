const React = require('react');
const Layout = require('./Layout');

module.exports = function Product({ product, user }) {
  return (
    <Layout user={user}>
      {user ? (
        <div id="card-container">
          <div className="card" style={{ width: '21rem' }}>
            <img src={product.url} className="card-img-top" alt="pic" />
            <div className="card-body">
              <h5 className="card-title">Pet: {product.title}</h5>
              <h5 className="card-title">Breed: {product.type}</h5>
              <h5 className="card-title">Price: {product.price}</h5>
              <h5 className="card-title">Quantaty: {product.quantity}</h5>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <input
                data-prodid={product.id}
                data-userid={user.id}
                id="add-to-cart-btn"
                type="button"
                value="Add to cart"
              />
              <a href={`/product/${product.id}/edit-form`} className="btn btn-primary">
                Edit
              </a>
              <input
                data-prodid={product.id}
                data-userid={user.id}
                id="delete-btn"
                type="button"
                value="Delete"
              />
            </div>
          </div>
        </div>
      ) : (
        <div id="card-container">
          <div className="card" style={{ width: '18rem' }}>
            <img src={product.url} className="card-img-top" alt="pic" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <h5 className="card-title">{product.type}</h5>
              <h5 className="card-title">{product.price}</h5>
              <h5 className="card-title">{product.quantity}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

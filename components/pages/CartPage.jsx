const React = require('react');
const Layout = require('../Layout');

module.exports = function Cart({ user, myProducts, totalCartPrice }) {
  return (
    <Layout user={user}>
      <div id="cart-container">
        <div id="small-cart-container">
          <h2>YOUR CART</h2>

          <ol className="list-group list-group-numbered">
            {myProducts &&
              myProducts.map((product) => (
                <li
                  className="list-group-item d-flex justify-content-between lh-sm"
                  key={product.id}
                  style={{ width: '400px' }}
                >
                  <div
                    data-prodid={product.id}
                    data-userid={user.id}
                    className="eachProd-cart-cart"
                    style={{ display: 'flex' }}
                  >
                    <div className="prod-title">Product: {product.title}.</div>
                    <div> Quantity:</div>
                    <div className="prod-quantity">
                      {product.quantityInCart}
                    </div>
                    <input
                      className="removeItemBtn"
                      data-prodid={product.id}
                      data-userid={user.id}
                      type="button"
                      value="remove"
                    />
                  </div>
                </li>
              ))}
          </ol>

          <h1>
            Total: ${totalCartPrice}
            {/* {myProducts.reduce((acc, eachProd) => acc + eachProd.price, 0)} */}
          </h1>

          <input
            data-userid={user.id}
            // data-prodid={product.id} // product.id is not defined here
            id="checkout"
            type="button"
            value="CHECKOUT"
          />
        </div>
      </div>
    </Layout>
  );
};

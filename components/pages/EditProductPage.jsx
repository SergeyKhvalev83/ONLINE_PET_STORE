const React = require('react');
const Layout = require('../Layout');

module.exports = function EditProduct({ product, user }) {
  return (
    <Layout user={user}>
      <div id="add-edit-product-form-container">
        <div id="edit-product-form-container">
          <form name="edit-product" data-userid={user.id} data-prodid={product.id}>
            <h4>Please provide information to Edit Product</h4>
            <div className="mb-3">
              <label for="exampleInputTitle1" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="emailHelp"
                name="title"
                value={product.title}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputType1" className="form-label">
                Type:
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="type"
                value={product.type}
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPrice1" className="form-label">
                Price:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="price"
                value={product.price}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputQuantity1" className="form-label">
                Quantaty:
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                name="quantity"
                value={product.quantity}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPicture1" className="form-label">
                Picture(url):
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="url"
                value={product.url}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Edit product
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

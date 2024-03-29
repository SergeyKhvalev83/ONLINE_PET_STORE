const React = require('react');
const Layout = require('../Layout');

module.exports = function AddNewProduct({ user }) {
  return (
    <Layout user={user}>
      <div id="add-edit-product-form-container">
        <form name="add-new-prod" data-userid={user.id}>
          <h4>Please provide information for new Product</h4>
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
            />
          </div>


          <button type="submit" className="btn btn-primary">
            List product
          </button>
        </form>
      </div>
    </Layout>
  );
};

// module.exports = function EditForm({ user }) {
//   return (
//     <Layout>
//       <form name="add-new-prod" data-userid={user.id}>
//         <div>
//           <label htmlFor="title">
//             title:
//             <input name="title" type="text" />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="type">
//             Type:
//             <input name="type" type="text" />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="price">
//             Price:
//             <input name="price" type="number" />
//           </label>
//         </div>
//         <div>
//           <label htmlFor="quantity">
//             Quantaty:
//             <input name="quantity" type="number" />
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Добавить
//         </button>
//       </form>
//     </Layout>
//   );
// };

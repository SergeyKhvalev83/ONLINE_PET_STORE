const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile({ user, products }) {
  return (
    <Layout user={user}>
      <div id="profile-container">
        <div>
          <div style={{ width: '500px' }}>
            <h5>List of my products</h5>
            <ol className="list-group list-group-numbered">
              {products ? (
                products.map((eachProduct) => (
                  <li
                    key={eachProduct.id}
                    className="list-group-item d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{eachProduct.type}</div>
                      {eachProduct.title}
                    </div>
                    <span className="badge text-bg-primary rounded-pill">
                      {eachProduct.quantity}
                    </span>
                  </li>
                ))
              ) : (
                <div> You did`t list any pet</div>
              )}
            </ol>
            <a className="profile-page" href="/product/add-form">
              Добавить товар
            </a>
          </div>

          <div>history all purchase here</div>
        </div>
      </div>
    </Layout>
  );
};

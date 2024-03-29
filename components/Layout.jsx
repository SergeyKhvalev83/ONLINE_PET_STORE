const React = require('react');
const Navbar = require('./Navbar');

module.exports = function layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />

        <title></title>
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="/js/registry-login.js" />
        <script defer src="/js/add-new-prod-prod-edit-prod-delete.js" />
        <script
          defer
          src="/js/add-to-cart-remove-form-cart-cartcheckout.js"
        />
        <script defer src="/js/checkout.js" />
      </head>
      <Navbar user={user} />
      {user ? <div> USER: {user.username}</div> : <> </>}

      <body>{children}</body>
    </html>
  );
};

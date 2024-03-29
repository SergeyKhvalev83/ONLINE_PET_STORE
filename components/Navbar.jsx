const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <ul className="nav nav-tabs">
      {user ? (
        <>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="/cart">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">
              Logout
            </a>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cart">
              Cart
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

// <nav classNameName="navbar">
//</nav>   {user ? (
//     <>
//       <div>
//         <a href="/">Home</a>
//       </div>
//       <a href="/profile">Profile</a>

//       <div>
//         <a href="api/logout">Logout</a>
//       </div>
//       <div>
//         <a href="/cart">Cart</a>
//       </div>
//     </>
//   ) : (
//     <>
//       <div>
//         <a href="/">Home</a>
//       </div>
//       <div>
//         <a href="/registry">Register</a>
//       </div>
//       <div>
//         <a href="/login">Login</a>
//       </div>
//       <div>
//         <a href="/cart">Cart</a>
//       </div>
//     </>
//   )}
// </nav>

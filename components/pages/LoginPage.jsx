const React = require('react');
const Layout = require('../Layout');

module.exports = function RegistryPage({ user }) {
  return (
    <Layout user={user}>
      <div id="registry-form-container">
        <form name="login">
          <h4>Please login</h4>
      
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

//   return (
//     <Layout user={user}>
//      <h1>Регистрация</h1>
//       <form name='registry'>
//         <div classNameName="form-group">
//           <label htmlFor="username">Логин:
//             <input
//               // id="username"
//               classNameName="form-control"
//               name="username"
//               type="text"
//               // required
//               // pattern="[A-Za-z]\w+"
//               // minLength="4"
//               title="Латинские буквы, цифры и _"
//             />
//           </label>
//         </div>
//         <div classNameName="form-group">
//           <label htmlFor="email">Email:
//             <input id="email" classNameName="form-control" name="email" type="email" required />
//           </label>
//         </div>
//         <div classNameName="form-group">
//           <label htmlFor="password">Пароль:
//             <input id="password" classNameName="form-control" name="password" type="text"/>
//           </label>
//         </div>
//         <button type="submit" classNameName="btn btn-primary">Зарегистрироваться</button>
//       </form>

//     </Layout>
//   );
// };

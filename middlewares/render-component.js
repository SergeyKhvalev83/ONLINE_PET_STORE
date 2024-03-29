const React = require('react');
const ReactDomServer = require('react-dom/server');

function renderComponent(component, props) {
  const element = React.createElement(component, { ...props });
  const html = ReactDomServer.renderToStaticMarkup(element);
  this.send(`<!DOCTYPE html>\n${html}`);
}


function ssr(req, res, next){
  res.renderComponent = renderComponent
  next()
}

module.exports = ssr
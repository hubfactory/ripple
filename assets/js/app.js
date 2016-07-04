'use strict';

// React
let React = require('react');
let ReactDOM = require('react-dom');

// React-Router
let ReactRouter = require('react-router');
let {Router, Route, IndexRoute, NotFoundRoute, Link, hashHistory, browserHistory} = ReactRouter;

// Components
let App = require('./components/App');
let Top = require('./components/Top');
let Detail = require('./components/Detail');
let About = require('./components/About');

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="detail" component={Detail} />
    <Route path="about" component={About} />
  </Route>
);

ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('main-wrapper')
);


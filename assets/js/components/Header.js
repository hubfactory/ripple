'use strict';

// React
let React = require('react');
let ReactRouter = require('react-router');
let {Link, IndexLink} = ReactRouter;

export default class Header extends React.Component {

  render() {
    return (
      <header id="global-header">
        <ul>
          <li><IndexLink to="/" activeClassName="is-active">Top</IndexLink></li>
          <li><Link to="/detail" activeClassName="is-active">Detail</Link></li>
          <li><Link to="/about" activeClassName="is-active">about</Link></li>
        </ul>
      </header>
    )
  }

}
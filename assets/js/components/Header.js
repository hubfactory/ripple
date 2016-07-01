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
          <li><IndexLink to="/">Top</IndexLink></li>
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>
      </header>
    )
  }

}
'use strict';

// React
let React = require('react');

// Components
let Header = require('./Header');
let Footer = require('./Footer');

export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ly-content-wrapper">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }

}
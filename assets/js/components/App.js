'use strict';

// React
let React = require('react');

// Components
let Header = require('./Header');

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }

}
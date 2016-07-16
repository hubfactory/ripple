'use strict';

// React
let React = require('react');

export default class IndividualApp extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}
'use strict';

// React
let React = require('react');

export default class IndividualApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

}
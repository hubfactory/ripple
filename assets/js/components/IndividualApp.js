'use strict';

// React
let React = require('react');

export default class IndividualApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cartList : props.cartList
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
        {React.cloneElement(this.props.children, {
          cartList: this.state.cartList
        })}
      </div>
    )
  }

}
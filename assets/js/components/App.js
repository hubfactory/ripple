'use strict';

// React
let React = require('react');

// Components
let Header = require('./Header');
let Footer = require('./Footer');

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      cartList : ['ふふふ']
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ly-content-wrapper">
          {this.props.children}
          {React.cloneElement(this.props.children, {
            cartList: this.state.cartList
          })}
        </div>
        <Footer />
      </div>
    )
  }

}
'use strict';

// jQuery
let $ = require('jquery');

// React
let React = require('react');
let ReactDOM = require('react-dom');

// React-Router
let ReactRouter = require('react-router');
let {Link} = ReactRouter;

// Ajax
let BaseAjax = require('../common/api/BaseAjax');

// Constants
let CONSTANTS = require('../common/CONSTANTS');

// mock
require('../common/_mock');

export default class Product extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.params
    };
  }

  componentDidMount() {
    let self = this;
  }

  render() {

    return (
      <div id="page-contents-id-cart">
        カート
      </div>
    )
  }

}
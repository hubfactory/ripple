'use strict';

// React
let React = require('react');

// Component
let TopSlider = require('./TopSlider');
let TopCreatorList = require('./TopCreatorList');

export default class Top extends React.Component {

  render() {
    return (
      <div id="page-contents-id-top">
        <div className="ly-slider">
          <TopSlider />
        </div>
        <div className="site-description">
          作り手にはそれぞれ、"想い"があります。<br />
          着ている服だったり、アクセサリーだったり、大切な人へのプレゼントだったり...<br />
          その裏側にある"想い"や"コンセプト"を感じられたら、もっと愛着をもって接することができるはず。
        </div>
        <div className="ly-main">
          <TopCreatorList />
        </div>
      </div>
    );
  }

}
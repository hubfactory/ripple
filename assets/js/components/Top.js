'use strict';

// React
let React = require('react');

// Component
let TopSlider = require('./TopSlider');

export default class Top extends React.Component {

  render() {
    return (
      <div className="ly-slider">
        <TopSlider />
      </div>
    )
  }

}
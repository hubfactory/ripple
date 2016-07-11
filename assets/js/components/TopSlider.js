'use strict';

// jQuery
let $ = require('jquery');

// React
let React = require('react');

// Constants
let CONSTANTS = require('../common/CONSTANTS');

// Slick
require('../util/slick');

// mock
require('../common/_mock');

export default class TopSlider extends React.Component {

  constructor() {
    super();
    this.state = {sliderList: []};
  }

  componentDidMount() {
    let self = this;

    // Slider List Ajax
    let sliderListAjax = () => {
      let defer = $.Deferred();
      $.ajax({
        url: CONSTANTS.API_URL.SLIDER_LIST,
        type: 'get',
        success: defer.resolve,
        error: defer.reject
      });
      return defer.promise();
    };

    // Slider Banner
    let setSlideBanner = () => {
      $('.js-slide-banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear'
      });
    }

    // Slider List
    sliderListAjax().done(function(res) {
      self.setState({sliderList: res});
      setSlideBanner();
    });


  }

  render() {

    let sliderList = this.state.sliderList.map((slider, i) => {
      return (
        <li className="slide-area" key={i}>
          <div className="slide-image">
            <img src={slider.slide_image} />
          </div>
          <div className="slider-inner">
            <div className="brand-name">
              {slider.brand_name}
            </div>
            <a href={'/individual/' + slider.creator_id}>
              <div className="slide-desc-area">
                <div className="face-image">
                  <img src={slider.creator_image} width="200" />
                </div>
                <div className="slide-text">
                  <p className="description">{slider.description}</p>
                  <p className="name">{slider.company_name}<br />{slider.creator_name}</p>
                </div>
                <div className="slide-category">
                  {slider.category}
                </div>
                <div className="slide-arw">
                  >
                </div>
              </div>
            </a>
          </div>
        </li>
      );
    });

    return (
      <ul id="js-slider-top" className="js-slide-banner slide-banner">
        {sliderList}
      </ul>
    );

  }

}
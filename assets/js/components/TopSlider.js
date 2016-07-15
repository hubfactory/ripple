'use strict';

// jQuery
let $ = require('jquery');

// React
let React = require('react');

// React-Router
let ReactRouter = require('react-router');
let {Link} = ReactRouter;

// Constants
let CONSTANTS = require('../common/CONSTANTS');

// Ajax
let BaseAjax = require('../common/api/BaseAjax');

// Slick
require('../util/slick');

// mock
require('../common/_mock');

export default class TopSlider extends React.Component {

  constructor() {
    super();
    this.state = {sliderList: []};

    let sliderListUrl = CONSTANTS.API_URL.SLIDER_LIST;

    this.sliderListAjax = new BaseAjax(sliderListUrl);
  }

  componentDidMount() {
    let self = this;

    let params = {};

    // Slider List Ajax
    this.sliderListAjax
      .get(params)
      .done(function(res) {
        self.setState(
          {
            sliderList: res
          }
        );
        setSlideBanner();
      });

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
  }

  render() {

    let sliderList = this.state.sliderList.map((slider, i) => {
      return (
        <li className="slide-area" key={i}>
          <div className="slide-image">
            <img src={slider.slideImage} />
          </div>
          <div className="slider-inner">
            <div className="brand-name">
              {slider.brandName}
            </div>
            <Link to={'/individual/' + slider.creatorId}>
              <div className="slide-desc-area">
                <div className="face-image">
                  <img src={slider.creatorImage} width="200" />
                </div>
                <div className="slide-text">
                  <p className="description">{slider.description}</p>
                  <p className="name">
                    {slider.companyName}<br />
                    {slider.creatorName}
                  </p>
                </div>
                <div className="slide-category">
                  {slider.category}
                </div>
                <div className="slide-arw">
                  >
                </div>
              </div>
            </Link>
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
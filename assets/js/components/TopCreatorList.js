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

// mock
require('../common/_mock');

export default class TopCreator extends React.Component {

  constructor() {
    super();
    this.state = {creatorList: []};

    let creatorListUrl = CONSTANTS.API_URL.CREATOR_LIST;

    this.creatorListAjax = new BaseAjax(creatorListUrl);
  }

  componentDidMount() {
    let self = this;

    let params = {};

    // Creator List Ajax
    this.creatorListAjax
      .get(params)
      .done(function(res) {
        self.setState(
          {
            creatorList: res
          }
        );
      });
  }

  render() {

    let creatorList = this.state.creatorList.map((creator, i) => {

      return (
        <li key={i}>
          <Link to={'/individual/' + creator.creatorId}>
            <div className="list-image">
              <img src={creator.brandImage} />
              <div className="list-category">
                {creator.category}
              </div>
            </div>
            <div className="list-info">
              <div className="info-inner">
                {creator.description}
              </div>
            </div>
            <div className="list-desc">
              <div className="desc-inner-left">
                <div className="circle-image">
                  <img src={creator.creatorImage} />
                </div>
              </div>
              <div className="desc-inner-right">
                <p className="headline">{creator.brandName}</p>
                <p className="name">
                  {creator.companyName}<br />
                  {creator.creatorName}
                </p>
              </div>
            </div>
            <div className="mod-button">
              "想い"に触れる
            </div>
          </Link>
        </li>
      );
    });

    return (
      <ul id="js-creators-top" className="mod-box-list">
        {creatorList}
      </ul>
    );

  }

}
'use strict';

// jQuery
let $ = require('jquery');

// React
let React = require('react');

// Constants
let CONSTANTS = require('../common/CONSTANTS');

// mock
require('../common/_mock');

export default class Individual extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.params,
      individualArticle: {
        sentenceList: []
      }
    };
  }

  componentDidMount() {
    let self = this;

    // URL
    let individualArticleUrl = CONSTANTS.API_URL.INDIVIDUAL_ARTICLE.replace(':creatorId', this.state.data.creatorId);

    // Slider List Ajax
    let individualArticleAjax = () => {
      let defer = $.Deferred();
      $.ajax({
        url: individualArticleUrl,
        type: 'get',
        success: defer.resolve,
        error: defer.reject
      });
      return defer.promise();
    };

    // Article
    individualArticleAjax().done(function(res) {
      self.setState(
        {
          individualArticle: res
        }
      );
      console.log(res);
    });

  }

  render() {

    let state = this.state.individualArticle;

    let sentenceList = state.sentenceList.map((sentence, i) => {

      let articleList =  sentence.articleList.map((article, i) => {

        let articleImage;

        if (article.isInterviewer) {
          articleImage = '/images/common/interviewer/' + article.interviewerId + '.png';
        } else {
          articleImage = state.creatorImage;
        }

        return (
          <div className="thought-box">
            <div className="thought-left">
              <div className="thought-face">
                <img src={articleImage} />
              </div>
            </div>
            <div className="thought-right">
              {article.sentence}
            </div>
          </div>
        );
      });

      return (
        <li>
          <h3 className="indivi-headline">
            {sentence.headline}
          </h3>

          <div className="indivi-image">
            <img src={sentence.articleImage} />
          </div>

          <div>
            {articleList}
          </div>
        </li>
      );
    });

    return (
      <div id="page-contents-id-individual">

        // MAIN IMAGE
        <div className="indivi-head-info">
          <div className="indivi-main-img">
            <img src={state.mainImage} />
            <h2 className="brand-name">
              {state.brandName}
            </h2>
            <div className="desc-area">
              <div className="desc-text">
                <p className="headline">
                  {state.mainText}
                </p>
                <p className="name">{state.companyName}<br />{state.creatorName}</p>
              </div>
            </div>
          </div>
        </div>

        <div classNameName="ly-main">
          <div className="indivi-contents-wrap">

            <div className="movie-box">
              <p className="movie-message">
                - Message Movie from Creator -
              </p>
              <iframe src={state.infoMovie} frameborder="0" allowfullscreen></iframe>
            </div>

            // SENTENCE LIST
            <ul id="js-creators-top" classNameName="mod-box-list">
              {sentenceList}
            </ul>

            <div className="remark-text">
              {state.remarkText}
            </div>

            <a href={'/individual/product/' + this.state.data.creatorId} className="product-btn right">
              このクリエイターの商品一覧へ
            </a>

            <div className="individual-info">
              <h4>クリエイター情報</h4>
              <div className="creator-info">
                {state.companyName}<br />
                {state.companyAddress}<br />
                代表：{state.creatorName}<br />
                <a href={state.siteUrl}>
                  {state.siteUrl}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    );

  }

}
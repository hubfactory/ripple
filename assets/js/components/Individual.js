'use strict';

// jQuery
let $ = require('jquery');

// React
let React = require('react');

// React-Router
let ReactRouter = require('react-router');
let {Link} = ReactRouter;

// Ajax
let BaseAjax = require('../common/api/BaseAjax');

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
        paragraphList: []
      }
    };

    let individualArticleUrl = CONSTANTS.API_URL.INDIVIDUAL_ARTICLE;

    this.individualArticleAjax = new BaseAjax(individualArticleUrl);
  }

  componentDidMount() {
    let self = this;

    let params = {
      creatorId: parseInt(this.state.data.creatorId)
    };

    // Article Ajax
    this.individualArticleAjax
      .get(params)
      .done(function(res) {
        self.setState(
          {
            individualArticle: res
          }
        );
      });
  }

  render() {

    let state = this.state.individualArticle;

    let paragraphList = state.paragraphList.map((paragraph, i) => {

      let sentenceList =  paragraph.sentenceList.map((sentence, i) => {

        let sentenceImage;

        if (sentence.isInterviewer) {
          sentenceImage = '/images/common/interviewer/' + sentence.interviewerId + '.png';
        } else {
          sentenceImage = state.creatorImage;
        }

        return (
          <li key={i}>
            <div className="left-block">
              <div className="face-image">
                <img src={sentenceImage} />
              </div>
            </div>
            <div className="right-block">
              {sentence.sentence}
            </div>
          </li>
        );
      });

      return (
        <div className="mod-content-block" key={i}>
          <h3 className="mod-heading">
            {paragraph.headline}
          </h3>

          <div className="content-image">
            <img src={paragraph.paragraphImage} />
          </div>

          <ul className="mod-line-list">
            {sentenceList}
          </ul>
        </div>
      );
    });

    return (
      <div id="page-contents-id-individual">

        {/* MAIN IMAGE */}
        <section className="head-info">
          <div className="head-main-image">
            <img src={state.mainImage} />
            <div className="head-inner">
              <h2 className="brand-name">
                {state.brandName}
              </h2>
              <div className="desc-text">
                <p className="headline">
                  {state.mainText}
                </p>
                <p className="name">
                  {state.companyName}<br />
                  {state.creatorName}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="ly-contents">

          <section className="movie-block">
            <p className="movie-message">
              - Message Movie from Creator -
            </p>
            <iframe src={state.infoMovie} frameBorder="0" allowFullScreen></iframe>
          </section>

          {/* SENTENCE LIST */}
          <section id="js-creators-top">
            {paragraphList}
          </section>

          <section className="mod-remark-block">
            <div className="remark-text">
              {state.remarkText}
            </div>

            <Link to={'/individual/product/' + this.state.data.creatorId} className="mod-button">
              このクリエイターの商品一覧へ
            </Link>

            <div className="remark-info-area">
              <p className="title">【クリエイター情報】</p>
              <div className="remark-creator-info">
                {state.companyName}<br />
                {state.companyAddress}<br />
                代表：{state.creatorName}<br />
                <a href={state.siteUrl}>
                  {state.siteUrl}
                </a>
              </div>
            </div>

            <Link to="/" className="mod-button is-back">
              戻る
            </Link>
          </section>

        </div>

      </div>
    );

  }

}
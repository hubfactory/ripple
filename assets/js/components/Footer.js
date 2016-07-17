'use strict';

// React
let React = require('react');
let ReactRouter = require('react-router');
let {Link, IndexLink} = ReactRouter;

export default class Header extends React.Component {

  render() {
    return (

      // Footer
      <footer id="global-footer">
        <div className="ly-global-footer">

          <div className="footer-inner">
            <p className="company-name">株式会社HUBFACTORY</p>

            <p className="inner-text"><a href="">サービス</a></p>
            <p className="inner-text"><a href="">会社概要</a></p>
            <p className="inner-text"><a href="">はぶろぐ</a></p>
            <p className="inner-text"><a href="">お問い合わせ</a></p>

            <p className="copy">© 2014-2015 HUBFACTORY.INC</p>
          </div>

        </div>
      </footer>

    )
  }

}
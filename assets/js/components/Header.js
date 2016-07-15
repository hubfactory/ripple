'use strict';

// React
let React = require('react');
let ReactRouter = require('react-router');
let {Link, IndexLink} = ReactRouter;

export default class Header extends React.Component {

  render() {
    return (

      // <header id="global-header">
      //   <ul>
      //     <li><IndexLink to="/" activeClassName="is-active">Top</IndexLink></li>
      //     <li><Link to="/detail" activeClassName="is-active">Detail</Link></li>
      //     <li><Link to="/about" activeClassName="is-active">about</Link></li>
      //   </ul>
      // </header>

      // HEADER
      <header id="global-header">
        <div className="ly-global-header">

          {/* HEADER NAVI */}
          <div className="header-outline">
            <p className="outline-text">
              クリエイターの"想い"に共感したモノだけ買えるサイト
            </p>
          </div>
          <div className="header-menu">
            <div className="header-logo">
              <Link to="/">
                <img src="/images/common/logo.png" alt="RIPPLE" />
              </Link>
            </div>

            <div className="menu-left-block">
              <ul className="menu-list">
                <li>
                  <a href="">さがす♪</a>
                </li>
                <li>
                  <a href="">RIPPLEとは？</a>
                </li>
              </ul>
            </div>

            <div className="menu-right-block">
              <ul className="menu-list">
                <li>
                  <a href="">ログイン</a>
                </li>
                <li>
                  <a href="">新規登録</a>
                </li>
              </ul>
            </div>
          </div>

          <div id="js-fixed-category-menu" className="ly-nav">
            <div className="logo-area">
              <a href="/">
                <img src="/images/common/logo.png" alt="RIPPLE" />
              </a>
            </div>
            <ul className="category-menu-lists">
              <li>
                <a href="">ファッション</a>
              </li>
              <li>
                <a href="">アクセサリー</a>
              </li>
              <li>
                <a href="">建築</a>
              </li>
              <li>
                <a href="">雑貨</a>
              </li>
              <li>
                <a href="">伝統工芸品</a>
              </li>
            </ul>
          </div>

        </div>
      </header>

    )
  }

}
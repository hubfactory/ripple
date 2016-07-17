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

    console.log(props);

    this.state = {
      data: props.params,
      individualProduct: {
        productList: []
      }
    };

    let individualProductUrl = CONSTANTS.API_URL.INDIVIDUAL_PRODUCT;

    this.individualProductAjax = new BaseAjax(individualProductUrl);

    // createClass内でthisが使用できないので、各メソッドをbindさせてあげる
    this.changeCount = this.changeCount.bind(this);
  }

  componentDidMount() {
    let self = this;

    let params = {
      creatorId: parseInt(this.state.data.creatorId)
    };

    // Product Ajax
    this.individualProductAjax
      .get(params)
      .done(function(res) {
        let productData = res;
        $.each(res.productList,function(i, el) {
          productData.productList[i].productCount = 1;
          if (el.sizeInfo.length != 0) {
            productData.productList[i].isSizeInfo = true;
          } else {
            productData.productList[i].isSizeInfo = false;
          }
        });
        self.setState(
          {
            individualProduct: productData
          }
        );
      });

    // 画像を切り替える
    $(document).on('click', '.js-product-thumnail', function(e){
      e.preventDefault();
      var $e = $(e.target);
      var $targetUrl = $e.attr('src');
      var $targetImage = $e.closest('.js-product-list').find('.js-product-image');
      $targetImage.attr("src", $targetUrl);
    });
  }

  changeCount(e) {
    e.preventDefault();
    let $target = $(e.target);
    let listIndex = Number($target.data('editIndex'));
    let tmpState = this.state;
    tmpState.individualProduct.productList[listIndex].productCount = e.target.value;
    this.setState(tmpState);
  }

  render() {
    let state = this.state.individualProduct;

    let productList = state.productList.map((product, i) => {

      let bigImage;

      // イメージリスト
      let productImage = product.productImage.map((image, i) => {
        if (i === 0) {
          bigImage = image;
        }
        return (
          <li key={i}>
            <img src={image} className="js-product-thumnail" />
          </li>
        );
      });

      // サイズリスト
      let sizeInfo = product.sizeInfo.map((info, i) => {
        return (
          <option value="{info}" key={i}>
            {info}
          </option>
        );
      });

      return (
        <li className="js-product-list" key={i}>
          <div className="product-list-left">
            <div className="product-image">
              <img src={bigImage} className="js-product-image" />
            </div>
          </div>
          <div className="product-list-right">
            <div className="product-description">
              <p className="product-name">
                {product.productName}
              </p>
              <p className="product-info">
                {product.productText}
              </p>

              <div className={!(product.isSizeInfo)? 'util-hide': ''}>
                <div className="product-input-box">
                  <p className="input-text">サイズ：</p>
                  <div className="input-area mod-select">
                    <select name="kind">
                      {sizeInfo}
                    </select>
                    <i className="fa fa-caret-down"></i>
                  </div>
                </div>
              </div>

              <div className="product-input-box">
                <p className="input-text">数量：</p>
                <div className="input-area">
                  <input type="number" name="count" min="1" value={product.productCount} className="js-item-num mod-input-text" ref="inputCount" onChange={this.changeCount} data-edit-index={i} />
                </div>
              </div>

              <div className="product-action-block">
                <ul className="product-image-list">
                  {productImage}
                </ul>

                <div className="action-block">
                  <p className="product-price">
                    単価：<span className="js-item-price">¥{product.price}</span>（税別）
                  </p>
                  <Link to="/cart" className="mod-button is-buy-button js-add-btn">
                    カートに入れる
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </li>
      );
    });

    return (
      <div id="page-contents-id-product">
        <div className="ly-contents">
          <div className="mod-content-block">
            <h1 className="mod-heading">
               - {state.brandName} - 商品一覧
            </h1>
            <ul className="product-list">
              {productList}
            </ul>
          </div>

          <Link to={'/individual/' + this.state.data.creatorId} className="mod-button is-back">
            戻る
          </Link>

        </div>
      </div>
    )
  }

}
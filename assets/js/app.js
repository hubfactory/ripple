'use strict';

// React
let React = require('react');
let ReactDOM = require('react-dom');

// React-Router
let ReactRouter = require('react-router');
let {Router, Route, IndexRoute, NotFoundRoute, Link, hashHistory, browserHistory} = ReactRouter;

// Redux
let {createStore, combineReducers} = require('redux');
let {Provider, connect} = require('react-redux');
let {syncHistoryWithStore, routerReducer } = require('react-router-redux');


// Components
let App = require('./components/App');
let Top = require('./components/Top');
let Detail = require('./components/Detail');
let About = require('./components/About');
let IndividualApp = require('./components/IndividualApp');
let Individual = require('./components/Individual');
let Product = require('./components/Product');
let Cart = require('./components/Cart');

// Ui
let CommonUiEvent = require('./common/ui');


/***************************************
 * Rudux の処理
 * CartList を Storeで管理
 * ここから
 **************************************/

// Action名の定義
const ADD_CART_LIST = 'ADD_CART_LIST';

// Action Creators
function addCartList(el) {
  // Action
  return {
    type: ADD_CART_LIST,
    el: el
  };
}

// Reducer
// 初期state変数（initialState）の作成
const initialState = {
  cartList: []
};

const cartLists = function(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_LIST:
      state.cartList.push(action.el);
      return Object.assign({}, state, {
        cartList: state.cartList,
      });
    default:
      return state;
  }
}

// createStore（）メソッドを使ってStoreの作成
const store = createStore(
  combineReducers({
    cartLists: cartLists,
    routing: routerReducer
  })
);

// Connect to Redux
let mapStateToProps = (state) => {
  return state;
};

let mapDispatchToProps = (dispatch) => {
  return {
    addCartList: (el) => {
      dispatch( addCartList(el) )
    }
  };
};

// ProductページをRuduxとコネクトさせる
const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);

/***************************************
 * Rudux の処理
 * CartList を Storeで管理
 * ここまで
 **************************************/


let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Top} />
    <Route path="individual/" component={IndividualApp}>
      <Route path=":creatorId" component={Individual} />
      <Route path="product/:creatorId" component={ProductList} />
    </Route>
    <Route path="cart" component={Cart} />
    <Route path="detail" component={Detail} />
    <Route path="about" component={About} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('main-wrapper')
);

CommonUiEvent();


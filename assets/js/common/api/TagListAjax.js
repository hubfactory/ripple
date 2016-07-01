'use strict';

let $ = require('jquery');
const CONSTANTS = require('../CONSTANTS');
let BaseAjax = require('./BaseAjax');

class TagListAjax extends BaseAjax {

  constructor() {
    super();
  }

  setUrl(args) {

    switch(args.type) {
      case 'get':
        this.url = CONSTANTS.API_URL.TAG_LIST;
        break;
      case 'post':
      case 'put':
      case 'del': // delete
    }
  }

  get() {
    return super.get();
  }

  post() {
    return super.post();
  }

  put() {
    return super.put();
  }

  del() {
    return super.del();
  }
}

module.exports = TagListAjax;

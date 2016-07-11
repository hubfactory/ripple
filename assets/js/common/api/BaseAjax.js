'use strict';

let $ = require('jquery');
let defer = $.Deferred();

class BaseAjax {

  constructor(url) {
    this.url = url;
    $.ajaxSetup({
      dataType: 'json',
      success: defer.resolve,
      error: defer.reject
    });
  }

  get(url) {
    $.ajax({
      url: this.url,
      type: 'get',
      data: this.params
    });
    return defer.promise();
  }

  post() {
    $.ajax({
      type: 'post',
      data: this.params
    });
    return defer.promise();
  }

  put() {
    $.ajax({
      type: 'put',
      data: this.params
    });
    return defer.promise();
  }

  del() {
    $.ajax({
      type: 'delete',
      data: this.params
    });
    return defer.promise();
  }

  fetch() {
    $.ajax({
      type: 'get',
      data: this.params
    });
    return defer.promise();
  }
}

module.exports = BaseAjax;

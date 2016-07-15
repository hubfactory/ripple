'use strict';

let $ = require('jquery');

class BaseAjax {

  constructor(url) {
    this.url = url;
  }

  setUp() {
    this.defer = $.Deferred();

    $.ajaxSetup({
      dataType: 'json',
      success: this.defer.resolve,
      error: this.defer.reject
    });
  }

  get(params) {
    this.setUp();

    $.ajax({
      url: this.url,
      type: 'get',
      data: params
    });
    return this.defer.promise();
  }

  post() {
    this.setUp();

    $.ajax({
      url: this.url,
      type: 'post',
      data: this.params
    });
    return this.defer.promise();
  }

  put() {
    this.setUp();

    $.ajax({
      url: this.url,
      type: 'put',
      data: this.params
    });
    return this.defer.promise();
  }

  del() {
    this.setUp();

    $.ajax({
      url: this.url,
      type: 'delete',
      data: this.params
    });
    return this.defer.promise();
  }

  fetch() {
    this.setUp();

    $.ajax({
      url: this.url,
      type: 'get',
      data: this.params
    });
    return this.defer.promise();
  }
}

module.exports = BaseAjax;

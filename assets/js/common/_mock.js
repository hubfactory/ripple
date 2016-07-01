'use strict';

let $ = require('jquery');
let $mockjax = require('jquery-mockjax');
const CONSTANTS = require('./CONSTANTS');

module.exports = (() => {

  $mockjax($, window); // mockjaxに$を渡して動くようにしている。この記述がないと動かない

  // 記事リスト
  $.mockjax({
    url: CONSTANTS.API_URL.ARTICLE_LIST,
    type: 'get',
    status: 200,
    responseText: [
      {
        articleId: 1,
        articleTitle: 'タイトル１',
        articleUrl: "記事その1URL",
        articleDescription : 'こんな感じ１こんな感じ１',
        articleImage : 'https://source.unsplash.com/random',
        tagData: [
          {
            tagId: 1,
            tagName: 'タグ１',
            tagUrl : '/'
          },
          {
            tagId: 2,
            tagName: 'タグ２',
            tagUrl : '/'
          }
        ]
      },
      {
        articleId: 2,
        articleTitle: 'タイトル２',
        articleUrl: "記事その2URL",
        articleDescription : 'こんな感じ２こんな感じ２',
        articleImage : 'https://source.unsplash.com/random',
        tagData: [
          {
            tagId: 3,
            tagName: 'タグ２−１',
            tagUrl : '/'
          },
          {
            tagId: 4,
            tagName: 'タグ２−２',
            tagUrl : '/'
          },
          {
            tagId: 5,
            tagName: 'タグ２−３',
            tagUrl : '/'
          }
        ]
      },
      {
        articleId: 3,
        articleTitle: 'タイトル３',
        articleUrl: "記事その3URL",
        articleDescription : 'こんな感じ３こんな感じ３',
        articleImage : 'https://source.unsplash.com/random',
        tagData: [
          {
            tagId: 6,
            tagName: 'タグ３−１',
            tagUrl : '/'
          }
        ]
      }
    ]
  });

})();

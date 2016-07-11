'use strict';

let $ = require('jquery');
let $mockjax = require('jquery-mockjax');
const CONSTANTS = require('./CONSTANTS');

module.exports = (() => {

  $mockjax($, window); // mockjaxに$を渡して動くようにしている。この記述がないと動かない

  // TOP SLIDER LIST
  $.mockjax({
    url: CONSTANTS.API_URL.SLIDER_LIST,
    type: 'get',
    status: 200,
    responseText: [
      {
        creator_id: 100,
        creator_name: '伊原 純一',
        brand_name: 'Script',
        company_name: '株式会社Brand New Day',
        category: 'ファッション',
        creator_image: '/images/creators/100/creator.png',
        slide_image: '/images/creators/100/slide.jpg',
        description: '着る人の体のことを第一に考えたリラックスウェアブランド'
      },
      {
        creator_id: 200,
        creator_name: '吉木 りさ',
        brand_name: 'RISARISA',
        company_name: '株式会社YOSHIKI',
        category: 'アイドル',
        creator_image: '/images/creators/200/creator.png',
        slide_image: '/images/creators/200/slide.jpg',
        description: 'りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪'
      },
      {
        creator_id: 300,
        creator_name: 'はふてぃ',
        brand_name: '関根学園！',
        company_name: '桜滝コーポレーション',
        category: 'アクセサリー',
        creator_image: '/images/creators/300/creator.png',
        slide_image: '/images/creators/300/slide.jpg',
        description: 'やっぱり猫が好き♪猫はでぶがいい♪'
      }
    ]
  });

  // TOP CREATOR LIST
  $.mockjax({
    url: CONSTANTS.API_URL.CREATOR_LIST,
    type: 'get',
    status: 200,
    responseText: [
      {
        creatorId: 100,
        creatorName: '伊原 純一',
        brandName: 'Script',
        companyName: '株式会社Brand New Day',
        category: 'ファッション',
        creatorImage: 'images/creators/100/creator.png',
        brandImage: 'images/creators/100/brand.png',
        description: 'じぶん時間を着よう♪"カラダに害のあるものはいっさい使わない！生産者にも優しい、そんなパーソナルウェア作り。だよおおおおおお'
      },
      {
        creatorId: 200,
        creatorName: '吉木 りさ',
        brandName: 'RISARISA',
        companyName: '株式会社YOSHIKI',
        category: 'アイドル',
        creatorImage: 'images/creators/200/creator.png',
        brandImage: 'images/creators/200/brand.png',
        description: 'りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪'
      },
      {
        creatorId: 300,
        creatorName: 'はふてぃ',
        brandName: '関根学園！',
        companyName: '桜滝コーポレーション',
        category: 'アクセサリー',
        creatorImage: 'images/creators/300/creator.png',
        brandImage: 'images/creators/300/brand.png',
        description: 'やっぱり猫が好き♪猫はでぶがいい♪'
      },
      {
        creatorId: 400,
        creatorName: '石塚 なおき',
        brandName: 'naoki-furniture',
        companyName: '株式会社石塚',
        category: '家具',
        creatorImage: 'images/creators/400/creator.png',
        brandImage: 'images/creators/400/brand.png',
        description: 'ばっちこい！てやんでい！'
      }
    ]
  });

})();

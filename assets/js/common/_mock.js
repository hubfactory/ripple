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
        creatorId: 1001,
        creatorName: '伊原 純一',
        brandName: 'Script',
        companyName: '株式会社Brand New Day',
        category: 'ファッション',
        creatorImage: '/images/creators/1001/creator.png',
        slideImage: '/images/creators/1001/slide.jpg',
        description: '着る人の体のことを第一に考えたリラックスウェアブランド'
      },
      {
        creatorId: 1002,
        creatorName: '吉木 りさ',
        brandName: 'RISARISA',
        companyName: '株式会社YOSHIKI',
        category: 'アイドル',
        creatorImage: '/images/creators/1002/creator.png',
        slideImage: '/images/creators/1002/slide.jpg',
        description: 'りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪'
      },
      {
        creatorId: 1003,
        creatorName: 'はふてぃ',
        brandName: '関根学園！',
        companyName: '桜滝コーポレーション',
        category: 'アクセサリー',
        creatorImage: '/images/creators/1003/creator.png',
        slideImage: '/images/creators/1003/slide.jpg',
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
        creatorId: 1001,
        creatorName: '伊原 純一',
        brandName: 'Script',
        companyName: '株式会社Brand New Day',
        category: 'ファッション',
        creatorImage: 'images/creators/1001/creator.png',
        brandImage: 'images/creators/1001/brand.png',
        description: 'じぶん時間を着よう♪"カラダに害のあるものはいっさい使わない！生産者にも優しい、そんなパーソナルウェア作り。だよおおおおおお'
      },
      {
        creatorId: 1002,
        creatorName: '吉木 りさ',
        brandName: 'RISARISA',
        companyName: '株式会社YOSHIKI',
        category: 'アイドル',
        creatorImage: 'images/creators/1002/creator.png',
        brandImage: 'images/creators/1002/brand.png',
        description: 'りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪りさだお♪'
      },
      {
        creatorId: 1003,
        creatorName: 'はふてぃ',
        brandName: '関根学園！',
        companyName: '桜滝コーポレーション',
        category: 'アクセサリー',
        creatorImage: 'images/creators/1003/creator.png',
        brandImage: 'images/creators/1003/brand.png',
        description: 'やっぱり猫が好き♪猫はでぶがいい♪'
      },
      {
        creatorId: 1004,
        creatorName: '石塚 なおき',
        brandName: 'naoki-furniture',
        companyName: '株式会社石塚',
        category: '家具',
        creatorImage: 'images/creators/1004/creator.png',
        brandImage: 'images/creators/1004/brand.png',
        description: 'ばっちこい！てやんでい！'
      }
    ]
  });

  // INDIVIDUAL ARTICLE 1001
  $.mockjax({
    url: CONSTANTS.API_URL.INDIVIDUAL_ARTICLE,
    data: { creatorId: 1001 },
    type: 'get',
    status: 200,
    responseText: {
      mainImage: '/images/creators/1001/article/main.jpg',
      mainText: '着る人のカラダのこと、作り手のカラダのことを第一に考えたら、どうしてもオーガニックコットンが必要になったんです。',
      remarkText: '「じぶんじかんをきよう」洋服にたいする熱い想いを語ってくれた伊原さん。伊原さんの運営するブランド「Script」の洋服をぜひのぞいてみてください！',
      companyName: '株式会社Brand New Day',
      creatorName: '伊原　純一',
      creatorImage: '/images/creators/1001/creator.png',
      brandName: 'Script',
      infoMovie: 'https://www.youtube.com/embed/TDqchYpBF-M',
      companyAddress: '神奈川県逗子市新宿２丁目',
      siteUrl: 'http://script-garden.com/',
      paragraphList: [
        {
          headline: 'ものづくりに対する想いの果てに',
          paragraphImage: '/images/creators/1001/article/1.png',
          sentenceList: [
            {
              isInterviewer: true,
              interviewerId: 1,
              sentence: 'なんで、安心してるんですか？'
            },
            {
              isInterviewer: false,
              interviewerId: 1,
              sentence: '安心してください！伊原ですよ！\n安心してください！函館ですよ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！こーじ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！たかだ！'
            }
          ]
        },
        {
          headline: 'こーじの思いの果てに',
          paragraphImage: '/images/creators/1001/article/1.png',
          sentenceList: [
            {
              isInterviewer: true,
              interviewerId: 1,
              sentence: 'なるほど。やっぱりこーじなんですね。'
            },
            {
              isInterviewer: false,
              interviewerId: 1,
              sentence: 'そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！そーだ！こーじだ！'
            }
          ]
        }
      ]
    }
  });

})();

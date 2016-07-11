module.exports = (() => {
  'use strict';

  // このファイルには定数を書く

  const CONSTANTS = {

    API_URL : {
      SLIDER_LIST:          '/api/sliderList',
      CREATOR_LIST:         '/api/creatorList',
      INDIVIDUAL_ARTICLE:   '/api/article?creatorId=:creatorId'
    }

  };

  return CONSTANTS;

})();

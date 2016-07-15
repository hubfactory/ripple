'use strict';
let $ = require('jquery');

module.exports = function() {

  let $window = $(window);
  let isFixedMenu = false;
  let $fixedMenu = $('#js-fixed-category-menu');

  // スクロールでカテゴリーヘッダーを表示
  let drowerCategoryMenu = {
    setEvent : function() {
      let self = this;
      $window.on('scroll', function(){
        if($window.scrollTop() > 100) {
          if (!isFixedMenu) {
            isFixedMenu = true;
            self.show($fixedMenu);
          }
        } else {
          if (isFixedMenu) {
            isFixedMenu = false;
            self.hide($fixedMenu);
          }
        }
      });
    },

    show : function($el) {
      $el.animate({ top: '0' });
    },

    hide : function($el) {
      $el.animate({ top: '-100' });
    }
  };

  // ページTOPへ
  let setToPageTopEvent = () => {
    let $toPageTopBtn = $('#js-to-page-top');

    $toPageTopBtn.hide();

    $window.on('scroll', function(){
      if ($(this).scrollTop() > 500) {
        $toPageTopBtn.fadeIn();
      } else {
        $toPageTopBtn.fadeOut();
      }
    });

    $toPageTopBtn.on('click', function(e){
      e.preventDefault();
      //TOPまでスクロール
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
  };

  drowerCategoryMenu.setEvent();
  setToPageTopEvent();

};
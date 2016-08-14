/**
 * raganya 2016-08-6
 */

$(function() {
  header.h.collapseNavbar()
  header.h.arrowUpIsShow()
  header.h.getScrollTop()
  header.h.scrollTop()
  header.h.windowScroll()

  // $('.nav li').click(function() {
  //   $(this).siblings().find('a').removeClass('active');
  //   $(this).find('a').addClass('active')
  // })
})

var header = (function (h) {

  h.collapseNavbar = function () {
    $('.js-navbar-collapse').click(function() {
      $(this).toggleClass('open')
    })
  }

  h.scrollTop = function () {
    $('#toTop').click(function() {
      $('body, html').animate({scrollTop: 0}, 600)
    })
  }

  /**
  * 获取滚动条距离顶端的距离
  * @return {}支持IE6
  */
  h.getScrollTop = function () {
    var scrollPos;
    if (window.pageYOffset) {
      scrollPos = window.pageYOffset
    } else if (document.compatMode && document.compatMode != 'BackCompat') {
      scrollPos = document.documentElement.scrollTop
    } else if (document.body) {
      scrollPos = document.body.scrollTop
    }
    return scrollPos
  }

  //右侧返回顶部是否显示
  h.arrowUpIsShow = function () {
    var yHeight = h.getScrollTop()
    if (yHeight >= 160) {
      $('#toTop').css({'display': 'block'});
    } else {
      $('#toTop').css({'display': 'none'});
    }
  }


  h.windowScroll = function () {
    $(window).scroll(function(event) {
      header.h.arrowUpIsShow()
    })
  }

  return {
    h: h
  }
})(window.h || {});


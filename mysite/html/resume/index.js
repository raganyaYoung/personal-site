$(function(){
  //绑定每个楼层的位置
  $(".module").each(function(index){ //下标从0开始
    var offsetTop=$(this).offset().top || 0;
    $(".js-r-position li").eq(index).find("a").attr("data-pos",offsetTop);
  });

  //右侧导航的点击事件
  $(".js-r-position li a").click(function(){
    $offsetTop=$(this).attr("data-pos");
    $(this).parents('li').addClass('active');
    $(this).parents('li').siblings().removeClass('active')
    $("body,html").animate({"scrollTop":$offsetTop+"px"},500);
  });

  //窗体滚动事件
  var $rOffsetTop = $(".js-r-position").offset().top || 0;
  var $width = $(".js-r-position").width();
  window.onscroll = function(){
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      var a518 = document.querySelectorAll('[data-pos="518"]');
      var a704 = document.querySelectorAll('[data-pos="704"]');
      var a890 = document.querySelectorAll('[data-pos="890"]');
      var a1028 = document.querySelectorAll('[data-pos="1028"]');
      var a1733 = document.querySelectorAll('[data-pos="1733"]');
      var a2316 = document.querySelectorAll('[data-pos="2316"]');
      var a2462 = document.querySelectorAll('[data-pos="2462"]');
      var a2668 = document.querySelectorAll('[data-pos="2668"]');
      if( t >= $rOffsetTop ) {
        $(".js-r-position").css({"position":"fixed","top":15,"width":$width});
      } else {
        $(".js-r-position").css({"position":"static","width":"auto"});
      }
      if(t >= 518 && t < 704) {
        $(a518).parents('li').addClass('active')
        $(a518).parents('li').siblings().removeClass('active')
      } else if (t >= 704 && t < 890 ) {
        $(a704).parents('li').addClass('active')
        $(a704).parents('li').siblings().removeClass('active')
      } else if (t >= 890 && t < 1028 ) {
        $(a890).parents('li').addClass('active')
        $(a890).parents('li').siblings().removeClass('active')
      } else if (t >= 1028 && t < 1733 ) {
        $(a1028).parents('li').addClass('active')
        $(a1028).parents('li').siblings().removeClass('active')
      } else if (t >= 1733 && t < 2316 ) {
        $(a1733).parents('li').addClass('active')
        $(a1733).parents('li').siblings().removeClass('active')
      } else if (t >= 2316 && t < 2462 ) {
        $(a2316).parents('li').addClass('active')
        $(a2316).parents('li').siblings().removeClass('active')
      } else if (t >= 2462 && t < 2668 ) {
        $(a2462).parents('li').addClass('active')
        $(a2462).parents('li').siblings().removeClass('active')
      } else if (t >= 2668) {
        $(a2668).parents('li').addClass('active')
        $(a2668).parents('li').siblings().removeClass('active')
      } 
  }

  
});
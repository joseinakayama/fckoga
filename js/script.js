$(function() {

    $('.game_box_tab li').click(function(){
        // クリックした要素の先祖要素の中で、classの値がgroupの要素を取得
        const group = $(this).parents('.game_info'); 
        group.find('.active').removeClass('active');
        $(this).addClass('active');
        group.find('.show').removeClass('show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        group.find(".game_box_category").eq(index).addClass('show');
    });

   $('.kv_slider').slick({
       autoplay: true,
       autoplayspeed: 3000,
       speed: 1000,
       fade: true,
       dots: true,
       dotsClass: 'slide-dots'
   });

   $(window).on('load scroll resize', function() {
    if ( $(window).scrollTop() <= 0 ) return;
    whQuarter = $(window).height() / 4;
    sh = $(window).scrollTop() + $(window).height();
    
    var pointTtl = $('.ttl, .news_box, .game_box, .sns_tw, .sns_fa');

    pointTtl.each(function () {
        if (sh > $(this).offset().top + whQuarter) {
            $(this).addClass('display-on');
        }
    });
});

});


$(function() {
    var pagetop = $('.topBack');

    pagetop.click(function() {
        $('body, html').animate({scrollTop: 0}, 1000);
        return false;
    });

    //--------------------------------------------------------------[opening]

    var kv = $('.kv');
    
    $(window).on('load', function () {
        var ww = $(window).width();
        $('html,body').animate({ scrollTop: 0 }, '1');

        kv.addClass('active');
    });

    //--------------------------------------------------------------[img_change]
    var $change = $(".change"),
    sp = "_sp.",
    pc = "_pc.",
    bp = 767;

        function imgSwitch() {
        var ww = $(window).width();
        $change.each(function() {
        var $this = $(this);
        if (ww >= bp) {
            $this.attr("src", $this.attr("src").replace(sp, pc));
        } else {
            $this.attr("src", $this.attr("src").replace(pc, sp));
        }
        });
        }
    imgSwitch();        

    //--------------------------------------------------------------[trigger]
    $(window).on('scroll resize', function() {
        if ( $(window).scrollTop() <= 0 ) return;
        whQuarter = $(window).height() / 4;
        sh = $(window).scrollTop() + $(window).height();
        
        var pointTtl = $('.point_ttl');
        var pointImg = $('.point_list_item.img');
        var pointTxt = $('.point_list_item.txt');

        pointTtl.each(function () {
            if (sh > $(this).offset().top + whQuarter) {
                $(this).addClass('active');
            }
        });
        pointImg.each(function () {
            if (sh > $(this).offset().top + whQuarter) {
                $(this).addClass('active');
            }
        });
        pointTxt.each(function () {
            if (sh > $(this).offset().top + whQuarter) {
                $(this).addClass('active');
            }
        });
    });

    $('#nav_toggle').on('click',function() {
        $('.header_inner').toggleClass('open');
    });
    
});
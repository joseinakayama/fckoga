$(function() {

    $('.game_box_tab li').click(function() {

        var index = $('.game_box_tab li').index(this);

        $('.game_box_tab li').removeClass('active');

        $(this).addClass('active');

        $('.game_area .game_box_category').removeClass('show').eq(index).addClass('show');
    });

});
$(function() {
    function ratingEnable() {
        $('#rating1').barrating({
            wrapperClass: 'br-wrapper-a',
            showSelectedRating: false
        });
		 $('#rating2').barrating({
            wrapperClass: 'br-wrapper-a',
            showSelectedRating: false
        });
    }

    function ratingDisable() {
        $('select').barrating('destroy');
    }

    $('.rating-enable').click(function(event) {
        event.preventDefault();

        ratingEnable();

        $(this).addClass('deactivated');
        $('.rating-disable').removeClass('deactivated');
    });

    $('.rating-disable').click(function(event) {
        event.preventDefault();

        ratingDisable();

        $(this).addClass('deactivated');
        $('.rating-enable').removeClass('deactivated');
    });

    ratingEnable();
});


(function($) {

"use strict"

    window.ESS = {
        'init': true
    };
    var p, pfx;
    pfx = ["webkit", "moz", "MS", "o", ""];
    function PrefixedEvent(element, type, callback) {
        for (p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }
            element.addEventListener(pfx[p]+type, callback, false);
        }
    }

    function updateSquares() {
        console.log('scroll!');
        $(".job").each(function() {
            var el, offset, scrollTop, scrollBottom, floatingHeaderTop, floatingHeaderBottom;
            el = $(this);
            offset = el.offset();
            scrollTop = $(window).scrollTop();
            scrollBottom = scrollTop + $(window).height();
            floatingHeaderTop = $(".floatingHeaderTop", this)
            floatingHeaderBottom = $(".floatingHeaderBottom", this)

            console.log(scrollTop, offset.top, (scrollTop > offset.top));
            if (scrollTop > offset.top) {
                floatingHeaderTop.css('visibility', 'visible');
            } else {
                floatingHeaderTop.css('visibility', 'hidden');
            }

            if (scrollBottom < offset.top) {
                floatingHeaderBottom.css('visibility', 'visible');
            } else {
                floatingHeaderBottom.css('visibility', 'hidden');
            }
        });
    }

    $('.job').each(function() {
        var clonedHeaderRow = $('.title', this);
        clonedHeaderRow.before(clonedHeaderRow.clone()).css('width', clonedHeaderRow.width()).addClass('floatingHeaderTop');
        clonedHeaderRow.before(clonedHeaderRow.clone()).css('width', clonedHeaderRow.width()).addClass('floatingHeaderBottom').removeClass('floatingHeaderTop');
    });

    // $('body').css('overflow', 'hidden');
    // var top = $(window).scrollTop();
    // var left = $(window).scrollLeft();
    $(window).scroll(updateSquares).trigger('scroll');
        // $(this).scrollTop(top).scrollLeft(left);
    // });

})(jQuery);

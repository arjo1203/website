(function(d) {
    var e = function() {
        this.options = {};
    };
    e.prototype.load = function(a) {
        var b = "http" + (this.options.ssl ? "s" : "") + "://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=" + this.options.outputMode + "&callback=?&q=" + encodeURIComponent(this.url);
        this.options.offsetStart && this.options.offsetEnd && (this.options.limit = this.options.offsetEnd);
        null != this.options.limit && (b += "&num=" + this.options.limit);
        null != this.options.key && (b += "&key=" + this.options.key);
        d.getJSON(b, a);
    }
    ;
    e.prototype.render = function() {
        var a = this;
        this.load();
    }
    ;
    d.fn.rss = function(a, b, c) {
        (new e(this,a,b,c)).render();
        return this;
    };



    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();

    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss();
})(jQuery);

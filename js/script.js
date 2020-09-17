var infiniteBackground = {
    el: null,
    style: {
        left: 0,
        top: 0,
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundImage: null,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: '0 0',
        backgroundSize: 'auto 100%'
    },
    scrollSideWay: function(){
        var scope = this;
        document.addEventListener('scroll', function(){
            var topOffset = $(scope.el).offset().top;

            scope.el.style.backgroundPosition = `-${topOffset}px 0px`
        })
    },
    init: function(el, bg = '../img/bg.png'){
        this.el = el;
        this.style.backgroundImage = `url("${bg}")`;
        Object.assign(this.el.style, this.style);
        this.scrollSideWay();
    }
}

$(document).ready(function(){
    infiniteBackground.init(
        document.getElementById('background'),
        'https://previews.123rf.com/images/davidoff205020/davidoff2050201807/davidoff205020180700014/103899414-minimalist-abstract-background-seamless-loop-infinite-space-background-matrix-of-glowing-stars-with-.jpg'
    );

    // $(document).on('scroll', function(e){
    //     var topOffset = $('#overlay').offset().top;
    //     $('#overlay').css('background-position', `-${topOffset}px 0px`)
    // })
});

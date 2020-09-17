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

var pipe = { // definition of object of the class pipe
    imgSrc: '../img/pipe.png',
    size: null,
    style: {
        position: 'fixed',
        top: null,
        left: null,
        width: null,
        bottom: 0
    },
    flip: false,
    init: function(parentEl){
        var pipeEl = document.createElement('img');
        
        pipeEl.src = this.imgSrc;
        this.style.left = Math.floor(Math.random() * 1000) + 'px';
        this.style.width = Math.floor(Math.random() * 200) + 'px';
        Object.assign(pipeEl.style, this.style)

        parentEl.appendChild(pipeEl);
    }
}

$(document).ready(function(){
    infiniteBackground.init(
        document.getElementById('background')
    );

    var pipe1 = pipe;
    var pipe2 = pipe;
    pipe1.init(document.body);
    pipe2.init(document.body);

    // $(document).on('scroll', function(e){
    //     var topOffset = $('#overlay').offset().top;
    //     $('#overlay').css('background-position', `-${topOffset}px 0px`)
    // })
});
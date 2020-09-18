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
    id: null,
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
    // public method
    moveLeft: function(distance){
        var _current = parseInt(document.getElementById(this.id).style.left)
        document.getElementById(this.id).style.left = `${_current - distance/20}px`;  
    },
    init: function(parentEl){
        var scope = this;
        this.id = 'pipe_' + Math.floor(Math.random() * 2000);

        var pipeEl = document.createElement('img');
        pipeEl.src = this.imgSrc;
        pipeEl.id = this.id;

        this.style.left = Math.floor(Math.random() * 2000) + 'px';
        this.style.width = Math.floor(Math.random() * 200) + 'px';

        // extends pipeEl.style with properties of this.style
        Object.assign(pipeEl.style, this.style); 
        parentEl.appendChild(pipeEl);
    }
}

$(document).ready(function(){
    var background = Object.create(infiniteBackground);

    background.init(
        document.getElementById('background')
    );

    var pipe1 = Object.create(pipe);
    var pipe2 = Object.create(pipe);
    var pipe3 = Object.create(pipe);
    var pipe4 = Object.create(pipe);
    var pipe5 = Object.create(pipe);

    pipe1.init(document.body);
    pipe2.init(document.body);
    pipe3.init(document.body);
    pipe4.init(document.body);
    pipe5.init(document.body);

    $(document).on('scroll', function(){
        var topOffset = $(window).scrollTop();
        pipe1.moveLeft(topOffset)
        pipe2.moveLeft(topOffset)
        pipe3.moveLeft(topOffset)
        pipe4.moveLeft(topOffset)
        pipe5.moveLeft(topOffset)
    })

    // $(document).on('scroll', function(e){
    //     var topOffset = $('#overlay').offset().top;
    //     $('#overlay').css('background-position', `-${topOffset}px 0px`)
    // })
});


var fox = {
    hair: 'orange',
    tail: true,
    growl: function(){
        console.log('meow')
    }
}

console.log(fox.hair)
fox.growl()


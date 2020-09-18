class Background {
    constructor(el, bg = '../img/bg.png'){
        this.el = el;
        this.style = {
            left: 0,
            top: 0,
            position: 'fixed',
            height: '100%',
            width: '100%',
            backgroundImage: null,
            backgroundRepeat: 'repeat-x',
            backgroundPosition: '0 0',
            backgroundSize: 'auto 100%',
            backgroundImage: `url("${bg}")`
        };
        this.moveRatio = 50;
        Object.assign(this.el.style, this.style);
    }

    scrollSideWay(distance){
        this.el.style.backgroundPosition = `-${distance / this.moveRatio}px 0px`;
    }
}

class Pipe {
    constructor(parentEl){
        this.id = 'pipe_' + Math.floor(Math.random() * 2000);
        this.imgSrc = '../img/pipe.png';
        this.size = null;
        this.style = {
            position: 'fixed',
            top: null,
            left: Math.floor(Math.random() * 2000) + 'px',
            width: Math.floor(Math.random() * 200) + 'px',
            bottom: 0
        };
        this.flip = false;
        this.moveRatio = 20;

        var pipeEl = document.createElement('img');
        pipeEl.src = this.imgSrc;
        pipeEl.id = this.id;
        Object.assign(pipeEl.style, this.style); 

        parentEl.appendChild(pipeEl);
    }

    moveLeft(distance){
        document.getElementById(this.id).style.left = `${parseInt(this.style.left) - distance / this.moveRatio}px`;  
    }
}

$(document).ready(function(){
    var background = new Background(
        document.getElementById('background')
    );

    document.addEventListener('scroll', function(){
        var offset = window.scrollY;

        background.scrollSideWay(offset);
        pipe1.moveLeft(offset)
        pipe2.moveLeft(offset)
        pipe3.moveLeft(offset)
        pipe4.moveLeft(offset)
        pipe5.moveLeft(offset)
    })

    var pipe1 = new Pipe(document.body);
    var pipe2 = new Pipe(document.body);
    var pipe3 = new Pipe(document.body);
    var pipe4 = new Pipe(document.body);
    var pipe5 = new Pipe(document.body);
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


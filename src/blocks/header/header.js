class Player {
    constructor () {
        this.sound = new Audio();
        this.sound.src = '/src/blocks/header/sounds/soundtrack.mp3';
        this.soundStatus = document.querySelector('.sound-icon-off');
        this.switch = true;
        this.event();
    }

    event() {
         this.soundStatus.addEventListener('click', ()=> {
            if( this.switch) {
                this.play();  
            }else {
                this.pause();
                this.switch = true;
            }
         });   
    }

    play() {
        this.soundStatus.className ='sound-icon-on';
        this.sound.play();
        this.switch = false;
    }

    pause() {
        this.soundStatus.className ='sound-icon-off';
        this.sound.pause();
        this.switch = true;
    }
}

new Player();


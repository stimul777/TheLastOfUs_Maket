class Player {
    constructor () {
        this.sound = new Audio();
        this.sound.src = '/src/blocks/header/sounds/soundtrack.mp3';
        this.soundOn = document.querySelector('.sound-icon-on');
        
        this.event();
    }

    event() {
        this.soundOn.addEventListener('click', this.play);
    }
    
    play() {
        this.sound.play();
    }

    pause() {
        this.sound.pause();
        this.soundOn.classList.add('sound-icon-off');
    }

 

}


new Player();
// start.pause();l





// let player = true;
// document.querySelector('.sound-icon-on').addEventListener('click', () => {
//     const sound = new Audio();
//     sound.src = '/src/blocks/header/sounds/soundtrack.mp3';
//     sound.play();

//     if (player==false) {
//         sound.pause();
//     }
  
//         player = false;
   
   

   
       
// });


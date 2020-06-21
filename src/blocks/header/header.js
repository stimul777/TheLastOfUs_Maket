// audio player
class Player {
    constructor () {
        this.sound = new Audio();
        this.sound.src = '/src/blocks/header/sounds/soundtrack.mp3';
        this.soundStatus = document.querySelector('.sound-icon-off');
        this.equalizer = document.querySelector('.equalizer');
        this.switch = true;
        this.event();
    }

    event() {
         this.soundStatus.addEventListener('click', ()=> {
            if(this.switch) {
                this.play();  
            }else {
                this.pause();
                this.switch = true;
            }
         });   
    }

    play() {
        this.equalizer.style.display = "block";
        this.soundStatus.className ='sound-icon-on';
        this.sound.play();
        this.switch = false;
    }

    pause() {
        this.equalizer.style.display = "none";
        this.soundStatus.className ='sound-icon-off';
        this.sound.pause();
        this.switch = true;
    }
}
new Player();

// Language
let switchLanguage = () => {
    const languageMenuItem = [...document.querySelectorAll('.language__menu-item')];
    const LanguageCheckpoint = document.querySelector('.language__checkpoint');
    let LanguageOn = false;
    console.log(LanguageCheckpoint.value);
    
    LanguageCheckpoint.addEventListener('click', () => {
        if(LanguageOn == true) {
            languageMenuItem.map(item => item.style.display = 'none');
            LanguageOn = false;
            }
            else {
                languageMenuItem.map(item => item.style.display = 'block');
                LanguageOn = true;
                }  
        });
}
switchLanguage();
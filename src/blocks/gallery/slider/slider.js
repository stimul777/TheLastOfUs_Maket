class Slider {
    constructor () {
        this.button = document.querySelector('.slider-switch__btn');
        this.imgCollections = [...document.querySelectorAll('.slider-img')];
        this.sliderContainer = document.querySelector('.slider__content-container');
        this.widthImg = -350;
        this.positionImg = 0;
        // this.count = 1;

        this.btnClick();
    }

    btnClick() {
      this.button.addEventListener('click', () => {  
     
        this.positionImg +=  this.widthImg;
        console.log( this.positionImg);

        this.sliderContainer.style.marginLeft = this.positionImg + 'px'; 
        this.positionImg = this.positionImg;
        
      });
    }

}
new Slider();


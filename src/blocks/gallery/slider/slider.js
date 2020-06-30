class Slider {
    constructor () {
        this.button = document.querySelector('.slider-switch__btn');
        this.imgCollections = [...document.querySelectorAll('.slider-img')];
        this.imgCollections[0].style.display = "block";
        this.btnClick();
    }

    btnClick() {
        this.button.addEventListener('click', () => {  
          this.imgCollections.forEach(element => {
            element.style.display = "block" ? element.style.display = "none" : false;
          });
          this.arrItem = this.imgCollections.pop();
          this.arrItem.style.display = "block";
          this.imgCollections.unshift(this.arrItem);
          });         
    }


}
new Slider();


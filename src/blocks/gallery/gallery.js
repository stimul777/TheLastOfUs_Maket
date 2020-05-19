class Slider {
    constructor () {
        this.button = document.querySelector('.gallery-switch__btn');
        this.imgCollections = document.querySelectorAll('.gallery-contaner-img');
        this.imgCollections[0].style.display = "block";
        console.log(`Коллекция ${this.imgCollections}`);
        this.btnClick();
    }

    btnClick() {
        this.button.addEventListener('click', () => {
           this.result = this.imgCollections.filter(item => this.imgCollections.style.display = "block")
           return  this.result;
        })
  
    }

}

new Slider();
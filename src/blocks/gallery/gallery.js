class Slider {
    constructor () {
        this.button = document.querySelector('.gallery-switch__btn');
        this.imgCollections = [...document.querySelectorAll('.gallery-contaner-img')];
        // this.imgCollections[0].style.display = "block";
        console.log( this.imgCollections);
        this.btnClick();
    }

    btnClick() {
        this.button.addEventListener('click', () => {

           let result = this.imgCollections.map((item) => {
                switch (item.style.display) {
               
                // case "block": item.style.display = "none";
                case "none": item.style.display = "block";  
              }

           });         
        })
  
    }

}

new Slider();

const arr = [
    {name: " Yura", age: 26},
    {name: "Vitya", age: 25},
    {name: "Senya", age: 20},
    {name: "Pasha", age: 21},
    {name: "Gosha", age: 22}
  ]
  
//   let array = arr.reduce((total, person) => {
//     return total + person.age/arr.length
//   },0)

let array = arr.findIndex(person =>person.name == 'Pasha')

  console.log(array)
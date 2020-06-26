// email form
class Email {
    constructor () {
        this.formEmail = document.querySelector('.contact-form-email__enter');
        this.formEmailBtn = document.querySelector('.contact-form-email__btn'); 
        this.footerImg = document.querySelector('.container-contact-block__img'); 
        this.contactForm = document.querySelector('.contact-form'); 
        this.contactFormText = document.querySelector('.contact-form__text');

        this.validation();
        this.send();
    }

    validation() {
        this.formEmail.addEventListener('click', ()=> {
            this.formEmail.value = '';
            this.footerImg.style.opacity = '30%';
        });

        this.formEmail.addEventListener('input', ()=> {  
            this.contactForm.className = "contact-form-gif"
            // this.contactFormText.style.display = 'none';
        });
    }

    send() {
        this.formEmailBtn.addEventListener('click', ()=> {
          this.footerImg.style.opacity = '100%';
          alert('Сообщение отправлено!');
        });
    }
}
new Email();






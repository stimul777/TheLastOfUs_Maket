// email form
class Email {
    constructor () {
        this.formEmail = document.querySelector('.contact-form-email__enter');
        this.formEmailBtn = document.querySelector('.contact-form-email__btn'); 
        this.footerImg = document.querySelector('.container-contact-block__img'); 
        this.contactFormGif = document.querySelector('.contact-form-gif'); 
        this.contactFormText = document.querySelector('.contact-form__text');
        this.validation();
        
    }

    validation() {
        this.formEmail.addEventListener('click', ()=> {
            this.formEmail.value = '';
            this.footerImg.style.opacity = '30%';
            this.formEmail.style.border = "1px solid white"
        });
        this.send();
    }

    send() {
        this.formEmailBtn.addEventListener('click', ()=> {
            this.formEmail.style.border = "1px solid white"
            if(!this.formEmail.value.match(/@./gi)){
                return this.sendError();   
                }
         
          this.contactFormGif.style.display = 'none';
          this.footerImg.style.opacity = '100%';
          console.log('ОТПРАВЛЕНО!');
        });
    }

    sendError() {
        this.contactFormGif.style.display = 'block';
        setTimeout(()=>{this.contactFormGif.style.display = 'none'},2000);
        this.formEmail.style.border = "1px solid red";
        console.log("ВЫЗВАНО");
    }
}
new Email();





